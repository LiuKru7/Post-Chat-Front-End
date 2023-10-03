import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import {useNavigate} from "react-router-dom";
import {useRef} from "react";



function Login({loginPage}) {


    const nav = useNavigate()
    const usernameRef = useRef()
    const passRef = useRef()

    function login () {

        const user = {
            username : usernameRef.current.value,
            passRef : passRef.current.value
        }

        console.log(user)

        nav("/page")
    }
    return (
        <div className="text-size-15em d-flex justify-content-center align-items-center vh-100 ">
            <Form className="p-5 bg-info border border-3 border-black border-radius-20">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="name" placeholder="Username" ref={usernameRef}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passRef} />
                </Form.Group>
                <Form.Group className="m-3 d-flex" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"  />
                    <span className="m-2">Auto Login</span>
                </Form.Group>
                <Nav.Link eventKey="2" className="mb-4" title="Item">
                    <span>Don't have an account? </span>
                    <span onClick={()=>loginPage(1)} className="text-primary fw-bold fs-3">  Sign up</span>
                </Nav.Link>
                <Button className="px-5" variant="primary" type="submit" onClick={login}>
                    Submit
                </Button>
            </Form>
        </div>

    );
}

export default Login;