import React from 'react';
import { ChatDots, HeartFill } from 'react-bootstrap-icons';


const Posts = ({x}) => {
    return (
        <div className="border border-black border-3 bg-info w-25 m-3 p-1 ">
            <h4>User {x.username}</h4>
            <p>Title: {x.title}</p>
            <img className="w-100 px-5" src={x.imgUrl} alt=""/>
            <div className="p-1 px-5 d-flex justify-content-end fs-5"><HeartFill/>{x.likes}
                <ChatDots></ChatDots> {x.comments}</div>
        </div>
    );
};

export default Posts;