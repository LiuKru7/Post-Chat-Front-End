import React from 'react';
import {InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ModalCreatePost = () => {
    return (
            <div  className="p-5 bg-body-tertiary position-absolute modalCreatePost text-center border-radius-20">
                <InputGroup className="w-100 ">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Tittle
                    </InputGroup.Text>
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <InputGroup className="w-100 mt-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Image url
                    </InputGroup.Text>
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <Button className="mt-4 px-5 py-1">SUBMIT</Button>
            </div>

            

    );
};

export default ModalCreatePost;