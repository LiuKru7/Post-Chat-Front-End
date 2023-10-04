import React, { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";
import IndexPage from "./pages/indexPage.jsx";
import Page from "./pages/page.jsx";
import ProfilePages from "./pages/profilePages.jsx";
import MessagesPage from "./pages/messagesPage.jsx";
import PostsPage from "./pages/postsPage.jsx";
import UsersPage from "./pages/usersPage.jsx";
import SinglePostPage from "./pages/singlePostPage.jsx";
import { io } from "socket.io-client";
import {useDispatch} from "react-redux";
import {setAllPosts, setUserInFo} from "./features/info.jsx";


export const socket = io("http://localhost:3001", {
    autoConnect: true
});


function App() {
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()

useEffect(()=> {
    fetch('http://localhost:8000/allPosts')
        .then((res)=>res.json())
        .then(data=>{
            dispatch(setAllPosts(data.data))
        })
},[])

    useEffect(()=> {
        socket.on('connect', () => {
        });
    },[])

    useEffect(()=> {
        socket.on('addAllPost', (allPost)=> {
            dispatch(setAllPosts(allPost))
        })
    },[])






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
