import React from 'react';
import {useSelector} from "react-redux";
import { X } from 'react-bootstrap-icons';
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";


const SinglePostPage = () => {
    const showPost = useSelector(state => (state.info.showPost))
    const nav = useNavigate()
    return (

        <div>
            <div className="border border-3 border-black p-lg-5 " >
                <div className="d-flex justify-content-end">
                    <X className="cursor-pointer x-hover x-border " onClick={()=>nav('/posts')} color="red" size={60}></X>
                </div>

                <div className="d-lg-flex">
                    <div className="flex-lg-grow-1">
                        <h3>{showPost.title}</h3>
                        <div>
                            <img className="w-100" src={showPost.image} alt=""/>
                        </div>
                    </div>
                    <div className="flex-lg-grow-1">
                        <div className="border border-3 border-radius-20 d-flex">
                            <div>
                                <p>img</p>
                            </div>
                            <div>
                                <b>Post Owner: {showPost.username}</b>
                                <Button>Write Message</Button>
                            </div>
                        </div>
                        <h4>Post Title: {showPost.title}</h4>
                    </div>

                </div>

                <div>
                    <div className="h-75">
                        <div className="m-2 m-lg-5 p-2 border-radius-20 border border-1 border-black">
                            <b>Name</b>
                            <p>Message</p>
                        </div>
                    </div>
                    <div className="h-25">
                        <InputGroup className="mb-3">
                            <InputGroup.Text className="d-none d-lg-block" id="inputGroup-sizing-default">
                                Message
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                            <Button>Send</Button>
                        </InputGroup>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default SinglePostPage;