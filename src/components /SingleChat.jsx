import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSingleChat, setUserInFo} from "../features/info.jsx";

const SingleChat = ({x, setShow}) => {
    const myInfo = useSelector(state => state.info.userInfo)
    const dispatch = useDispatch()
    const host = useSelector (state=>state.info.host)

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                Authorization: localStorage.getItem('token')
            },
        };
        fetch(`http://${host}/profile`, options)
            .then((res) => res.json())
            .then((data) => {
                if (data.error) return
                dispatch(setUserInFo(data.data))
            });
    }, [])


    function openChat () {
        setShow(0)
        dispatch(setSingleChat(x))
    }

    return (
        <div onClick={openChat} className="cursor-pointer">
            <h5>
                {x.usernameOne === myInfo.username ? x.usernameTwo : x.usernameOne}
            </h5>
        </div>
    );
};

export default SingleChat;