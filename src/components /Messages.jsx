import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import SingleMessage from "./SingleMessage.jsx";
import {InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {socket} from "../App.jsx";

const Messages = () => {
    const singleChat = useSelector(state => state.info.singleChat)
    const userInfo = useSelector(state => state.info.userInfo)
    const messageRef = useRef()
    const messagesEndRef = useRef(null);
    const [error, setError] = useState()

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
    }, [singleChat.messages]);

    useEffect(() => {
        socket.emit('joinChat', singleChat.roomId);
    }, [singleChat])

    function messageFunk() {
        if (!userInfo.username) return
        const info = {
            roomId: singleChat.roomId,
            msgFrom: userInfo.username,
            message: messageRef.current.value
        }
        if (info.message.length<2) return setError("error")
        socket.emit('sendMessage', info);
        messageRef.current.value = ""
        setError("")
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        messageFunk();
    }

    return (
        <div className="px-2 d-flex flex-column justify-content-between chat-window">
            <div className="chat-messages" ref={messagesEndRef}>
                <div>
                    {singleChat.messages && singleChat.messages.map((x, i) =>
                        <SingleMessage key={i} x={x}></SingleMessage>
                    )}
                </div>
            </div>
            {singleChat.roomId &&
                <div>
                    <Form onSubmit={handleFormSubmit}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text className="d-none d-lg-block" id="inputGroup-sizing-default">
                                {error ? <span style={{color: "red"}}>Please type message to continue</span> : "Message" }
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                ref={messageRef}
                            />
                            <Button type="submit">Send</Button>
                        </InputGroup>
                    </Form>
                </div>
            }


        </div>
    );
};

export default Messages;