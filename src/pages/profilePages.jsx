import React, {useState} from 'react';
import Toolbar from "../components /Toolbar.jsx";
import {InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ProfilePages = () => {
    const [change, setChange] = useState(0)

    function changePasswordField () {
        if (change===0) setChange(1)
        if (change===1) setChange(0)
    }





    return (
        <div className="vh-100 p-0 m-0">
            <Toolbar></Toolbar>
            <div className="d-flex p-5">
                <div className="flex-grow-1 w-100">
                    <div className="w-100">
                        <img className="w-100" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt=""/>
                    </div>
                    <div className="w-100 p-3">
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Change image
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                            <Button>Submit</Button>
                        </InputGroup>
                    </div>
                </div>
                <div className="flex-grow-1 w-100">
                    <div className="w-100 p-3">
                        <h2 className="m-3">Username: </h2>
                        <div>
                            <Button
                                onClick={changePasswordField}
                                className="m-3 mt-5 px-5 py-1"
                                variant={change===1 ? "success" : "primary"}

                            >Change password</Button>
                        </div>
                        {change===0 ? "" :    <div>
                            <InputGroup className="w-75 m-3">
                                <InputGroup.Text id="inputGroup-sizing-default">
                                    Old Password
                                </InputGroup.Text>
                                <Form.Control
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />

                            </InputGroup>
                            <InputGroup className="w-75 m-3">
                                <InputGroup.Text id="inputGroup-sizing-default">
                                    New Password
                                </InputGroup.Text>
                                <Form.Control
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <InputGroup className="w-75 m-3">
                                <InputGroup.Text id="inputGroup-sizing-default">
                                    New Password
                                </InputGroup.Text>
                                <Form.Control
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <Button className="m-3 px-5 py-1">SUBMIT</Button>
                        </div>
                        }





                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfilePages;