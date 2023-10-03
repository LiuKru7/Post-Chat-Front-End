import React, {useState} from 'react';
import Login from "../components /Login.jsx";
import Register from "../components /Register.jsx";


const IndexPage = () => {
    const [loginPage, setLoginPage] = useState(0)

    return (
        <div>
            <div >
                {loginPage===0 ? <Login loginPage={setLoginPage}></Login>:<Register loginPage={setLoginPage}></Register>}
            </div>
        </div>
    );
};

export default IndexPage;