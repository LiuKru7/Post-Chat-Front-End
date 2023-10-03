import React from 'react';
import Toolbar from "../components /Toolbar.jsx";
import SingleUser from "../components /SingleUser.jsx";

const UsersPage = () => {
    const user= [{
        username: "Jonas",
        image: ""
    },
        {
            username: "Petras",
            image: ""
        },
        {
            username: "Kazys",
            image: ""
        },

    ]
    return (
        <div className="p-0 m-0">
            <Toolbar></Toolbar>
            {user && user.map((x,i)=><SingleUser key={i} x={x}></SingleUser>)}

        </div>
    );
};

export default UsersPage;