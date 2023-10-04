import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Toolbar from "./components /Toolbar.jsx";
import Login from "./components /Login.jsx";
import Register from "./components /Register.jsx";
import {Routes,Route} from "react-router-dom";
import IndexPage from "./pages/indexPage.jsx";
import Page from "./pages/page.jsx";
import ProfilePages from "./pages/profilePages.jsx";
import MessagesPage from "./pages/messagesPage.jsx";
import PostsPage from "./pages/postsPage.jsx";
import UsersPage from "./pages/usersPage.jsx";
import * as Icon from 'react-bootstrap-icons';
import SinglePostPage from "./pages/singlePostPage.jsx";



function App() {
    const [count, setCount] = useState(0)



  return (
    <div className="container vw-100 bg-primary-subtle m-auto p-0">
        <Routes>
            <Route path="/" element={<IndexPage/>} ></Route>
            <Route path="/page" element={<Page></Page>}></Route>
            <Route path="/profile" element={<ProfilePages></ProfilePages>}></Route>
            <Route path="/messages" element={<MessagesPage></MessagesPage>}></Route>
            <Route path="/posts" element={<PostsPage></PostsPage>}></Route>
            <Route path="/users" element={<UsersPage></UsersPage>}></Route>
            <Route path="/singlePost" element={<SinglePostPage></SinglePostPage>}></Route>
        </Routes>
    </div>
  )
}

export default App
