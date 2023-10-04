import React, {useState} from 'react';
import Toolbar from "../components /Toolbar.jsx";
import Button from "react-bootstrap/Button";
import { ArrowDown, ArrowUp } from 'react-bootstrap-icons';
import {Modal} from "react-bootstrap";
import ModalCreatePost from "../components /ModalCreatePost.jsx";
import Posts from "../components /Posts.jsx";


const PostsPage = () => {

    const [posts, setPosts] =useState([{
        username: "Liudvikas",
        title: "senas",
        imgUrl: "https://g.delfi.lt/images/pix/300x200/T0N14OutztY/liudvikas-andriulis-78204091.jpg",
        likes: 5,
        comments: 5
    },
        {
            username: "Jonas",
            title: "naujas",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Bretagne_Finistere_BauernhausaufCrozon_19064.jpg",
            likes: 4,
            comments: 4
        },
        {
            username: "Andrius",
            title: "naujo",
            imgUrl: "https://abcnamas.lt/wp-content/uploads/2022/07/abc-namas-80-didelis-pagrindine-1.jpeg",
            likes: 3,
            comments: 6
        },
        {
            username: "Ramunas",
            title: "labas",
            imgUrl: "https://aruodas-img.dgn.lt/object_65_112917699/vilnius-gineitiskes-vidautiskiu-g.jpg",
            likes: 2,
            comments: 9
        },
        {
            username: "Barbuolis",
            title: "leba",
            imgUrl: "https://g.delfi.lt/images/pix/300x200/T0N14OutztY/liudvikas-andriulis-78204091.jpg",
            likes: 15,
            comments: 12
        },
        {
            username: "Barbuolis",
            title: "Kurmis",
            imgUrl: "https://g.delfi.lt/images/pix/300x200/T0N14OutztY/liudvikas-andriulis-78204091.jpg",
            likes: 15,
            comments: 12
        },
        {
            username: "Barbuolis",
            title: "Grazuolis",
            imgUrl: "https://g.delfi.lt/images/pix/300x200/T0N14OutztY/liudvikas-andriulis-78204091.jpg",
            likes: 11,
            comments: 32
        },
        {
            username: "Barbuolis",
            title: "Grazuolis",
            imgUrl: "https://g.delfi.lt/images/pix/300x200/T0N14OutztY/liudvikas-andriulis-78204091.jpg",
            likes: 2,
            comments: 12
        }])



    const [sortId, setSortId] = useState(0)
    const [modalOn, setModalOn] = useState(0)


    function sortByComment () {
        let data = posts
        if(sortId===1) {
            data.sort((a, b) => a.comments - b.comments);
            setPosts(data)
            return  setSortId(0)
        }
        data.sort((a, b) => b.comments - a.comments);
        setPosts(data)
        setSortId(1)
    }
    function sortByLikes() {
        let data = posts
        if(sortId===2) {
            data.sort((a, b) => a.likes - b.likes);
            setPosts(data)
            return setSortId(0)
        }
        data.sort((a, b) => b.likes - a.likes);
        setPosts(data)
        setSortId(2)

    }
    function sortByTime () {
        let data = posts
        if(sortId===3) {
            data.sort((a, b) => a.likes - b.likes);
            setPosts(data)
            return  setSortId(0)
        }
        data.sort((a, b) => b.likes - a.likes);
        setPosts(data)
        setSortId(3)
    }

    function createPostOpen () {
    if (modalOn===1) return setModalOn(0)
    setModalOn(1)
    }



    return (
        <div className="p-0 m-0 position-relative">
            {modalOn===1 &&
                <ModalCreatePost></ModalCreatePost>
            }
            <Toolbar></Toolbar>
            <div className="d-lg-flex  ">
                <div className="mt-3 mx-5  d-lg-none justify-content-center d-flex flex-column">
                    <Button onClick={createPostOpen} variant="success fs-3" >Create Post</Button>
                </div>
                <div className="bg-body-secondary m-lg-5 mx-5 my-2  px-lg-5 py-3 w-75 d-flex justify-content-between align-items-start border-radius-20 ">
                    <div className=""><span className="fs-4 fw-bold">Sort By:</span></div>
                    <Button onClick={sortByComment} variant="secondary" className="px-xl-4">Comment
                        {sortId===1 ? <ArrowDown  color="white" size={25} /> : <ArrowUp  color="white" size={25} /> }
                    </Button>
                    <Button onClick={sortByLikes} variant="secondary" className="px-xl-4">Likes
                        {sortId===2 ? <ArrowDown  color="white" size={25} /> : <ArrowUp  color="white" size={25} /> }
                    </Button>
                    <Button onClick={sortByTime} variant="secondary" className="px-xl-4">Time
                        {sortId===3 ? <ArrowDown color="white" size={25} /> : <ArrowUp color="white" size={25} /> }
                    </Button>
                </div>
                <div className="w-25  m-5  d-lg-flex justify-content-center d-none">
                    <Button onClick={createPostOpen} variant="success fs-3" >Create Post</Button>
                </div>
            </div>
            <div className="d-flex flex-wrap overflow-auto h-75 justify-content-center position-relative">
                {posts && posts.map((x,i)=> (
                    <Posts key={i} x={x}></Posts>))}
            </div>

        </div>
    );
};

export default PostsPage;