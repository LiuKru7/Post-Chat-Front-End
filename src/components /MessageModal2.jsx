import React, {useRef, useState} from 'react'
import { X } from 'react-bootstrap-icons';
import {InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";
import {socket} from "../App.jsx";

const MessageModal = ({x,setShow}) => {
    const myInfo = useSelector (state=> state.info.userInfo)
    const messageRef = useRef()
    const [error, setError] = useState()


    function messageFunk () {
        if (messageRef.current.value.length<2) return setError("Message to short")
        setError("")
        const info = {
            username: x.username,
            userId: x.userId,
            myUsername: myInfo.username,
            myId: myInfo._id,
            message: messageRef.current.value,
        }
        socket.emit("newMessage", info);
        setShow(0)
    }
    return (
        <div className=" px-1 bg-body-tertiary position-absolute border-radius-20 border border-black   text-center z-3 message-field">
            <div className="d-flex justify-content-end p-2">
                <X className="cursor-pointer x-hover x-border " onClick={()=>setShow(0)} color="red" size={20}></X>
            </div>
            <div className="d-flex justify-content-start"><b>{x.username}:</b></div>
            <div>  <InputGroup className="mb-3">
                <InputGroup.Text className="d-none d-lg-block" id="inputGroup-sizing-default">
                    Message
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    ref={messageRef}
                />
                <Button onClick={messageFunk}>Send</Button>
            </InputGroup></div>
            <div style={{color:"red",marginTop:"-10px"}}>
                {error && error}
            </div>
        </div>
    );
};

export default MessageModal;