import React, {useEffect, useState} from 'react';
import Toolbar from "../components /Toolbar.jsx";
import {setAllMyMessages, setAllUsers, setSingleChat} from "../features/info.jsx";
import {useDispatch, useSelector} from "react-redux";
import SingleChat from "../components /SingleChat.jsx";
import Messages from "../components /Messages.jsx";
import Button from "react-bootstrap/Button";

const MessagesPage = () => {
    const host = useSelector (state=>state.info.host)
    const dispatch = useDispatch()
    const allMyMessages = useSelector(state => state.info.allMyMessages)
    const oneChat = useSelector(state => state.info.singleChat)
    const [show, setShow] = useState(1)

    useEffect(() => {
        dispatch(setSingleChat([]))
    }, []);
    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                Authorization: localStorage.getItem('token')
            },
        }
        fetch(`${host}/allMessages`, options)
            .then((res) => res.json())
            .then(data => {
                if (data.error) return
                dispatch(setAllMyMessages(data.data))
            })
    }, [oneChat])

    return (
        <div className="p-0 m-0 position-relative">
            <Toolbar></Toolbar>
            <div className="position-relative d-flex justify-content-end">
                <Button
                    onClick={() => setShow(show === 1 ? 0 : 1)}
                    className="px-5 m-2"
                >
                    Contacts
                </Button>
            </div>
            {show === 1 &&
                <div className="bg-info-subtle p-3 gap-3 chat-users position-absolute chat-users">
                    {allMyMessages && allMyMessages.map((x, i) =>
                        <SingleChat key={i} x={x} setShow={setShow}></SingleChat>
                    )}
                </div>
            }
            <div className="d-flex flex-column">
                <div className="flex-lg-grow-1">
                    <Messages></Messages>
                </div>
            </div>
        </div>
    );
};

export default MessagesPage;