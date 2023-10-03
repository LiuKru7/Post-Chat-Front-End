import React, {useRef} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

const Register = () => {
    const usernameRef = useRef()
    const passRef = useRef()
    const pass2Ref = useRef()

    function registerFunk () {
        const user = {
            username : usernameRef.current.value,
            password : passRef.current.value,
            password2 : pass2Ref.current.value
        }
        console.log("Labas")
    }

    return (
        <div className="text-size-15em d-flex justify-content-center align-items-center vh-100">
            <Form className="p-5 bg-info border border-3 border-black border-radius-20">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="name" placeholder="Username" ref={usernameRef} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passRef} />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicPassword" ref={pass2Ref}>
                    <Form.Label>Password 2</Form.Label>
                    <Form.Control type="password" placeholder="Password 2" />
                </Form.Group>


                <Button className="px-5" variant="primary" type="submit" onClick={registerFunk} >
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;