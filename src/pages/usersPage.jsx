import React from 'react';
import Toolbar from "../components /Toolbar.jsx";
import SingleUser from "../components /SingleUser.jsx";
import {useSelector} from "react-redux";

const UsersPage = () => {
    const user = useSelector(state => state.info.allUsers)
    return (
        <div className="p-0 m-0">
            <Toolbar></Toolbar>
            <div className="d-flex flex-wrap">
                {user && user.map((x,i)=><SingleUser key={i} x={x}></SingleUser>)}
            </div>

        </div>
    );
};

export default UsersPage;