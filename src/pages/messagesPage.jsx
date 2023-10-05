import React, {useEffect} from 'react';
import Toolbar from "../components /Toolbar.jsx";
import {setAllMyMessages, setAllUsers} from "../features/info.jsx";
import {useDispatch, useSelector} from "react-redux";
import SingleChat from "../components /SingleChat.jsx";
import Messages from "../components /Messages.jsx";


const MessagesPage = () => {
    const dispatch = useDispatch ()
    const allMyMessages= useSelector(state => state.info.allMyMessages)


    useEffect(()=> {
        const options = {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                Authorization: localStorage.getItem('token')
            },
        }
        fetch('http://localhost:8000/allMessages', options)
        .then((res)=>res.json())
        .then(data=>{
            if (data.error) return
            dispatch(setAllMyMessages(data.data))
            console.log(data.data)
        })
},[])

    return (
        <div className="p-0 m-0">
            <Toolbar></Toolbar>
            <div className="d-flex">
                <div className="flex-lg-grow-1 d-flex flex-column border border-3 border-black p-5 gap-3">
                    {allMyMessages && allMyMessages.map((x,i)=>
                        <SingleChat key={i} x={x}></SingleChat>
                    )}
                </div>
                <div className="flex-lg-grow-1">
                    <Messages></Messages>
                </div>
            </div>
        </div>
    );
};

export default MessagesPage;