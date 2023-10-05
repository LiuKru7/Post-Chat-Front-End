import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSingleChat} from "../features/info.jsx";



const SingleChat = ({x}) => {
    const myInfo = useSelector(state => state.info.userInfo)
    const dispatch = useDispatch()

    function openChat () {


        dispatch(setSingleChat(x))
        console.log(x.roomId)
    }


    return (
        <div onClick={openChat}>
            {x.usernameOne === myInfo.username ? x.usernameTwo : x.usernameOne}
        </div>
    );
};

export default SingleChat;