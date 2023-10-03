import React, {useState} from 'react';
import Toolbar from "../components /Toolbar.jsx";
import Button from "react-bootstrap/Button";
import { ArrowUpSquare, ArrowDownSquare, ArrowDown, ArrowUp } from 'react-bootstrap-icons';
import {Modal} from "react-bootstrap";
import ModalCreatePost from "../components /ModalCreatePost.jsx";
import Posts from "../components /Posts.jsx";


const PostsPage = () => {

    const posts = [
        {
        username: "Liudvikas",
        title: "Grazuolis",
        imgUrl: "https://g.delfi.lt/images/pix/300x200/T0N14OutztY/liudvikas-andriulis-78204091.jpg",
        likes: 5,
        comments: 5
    },
        {
            username: "Jonas",
            title: "Grazuolis",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Bretagne_Finistere_BauernhausaufCrozon_19064.jpg",
            likes: 4,
            comments: 4
        },
        {
            username: "Andrius",
            title: "Grazuolis",
            imgUrl: "https://abcnamas.lt/wp-content/uploads/2022/07/abc-namas-80-didelis-pagrindine-1.jpeg",
            likes: 3,
            comments: 6
        },
        {
            username: "Ramunas",
            title: "Grazuolis",
            imgUrl: "https://aruodas-img.dgn.lt/object_65_112917699/vilnius-gineitiskes-vidautiskiu-g.jpg",
            likes: 2,
            comments: 9
        },
        {
            username: "Barbuolis",
            title: "Grazuolis",
            imgUrl: "https://g.delfi.lt/images/pix/300x200/T0N14OutztY/liudvikas-andriulis-78204091.jpg",
            likes: 15,
            comments: 12
        },
        {
            username: "Barbuolis",
            title: "Grazuolis",
            imgUrl: "https://g.delfi.lt/images/pix/300x200/T0N14OutztY/liudvikas-andriulis-78204091.jpg",
            likes: 15,
            comments: 12
        },
        {
            username: "Barbuolis",
            title: "Grazuolis",
            imgUrl: "https://g.delfi.lt/images/pix/300x200/T0N14OutztY/liudvikas-andriulis-78204091.jpg",
            likes: 15,
            comments: 12
        },
        {
            username: "Barbuolis",
            title: "Grazuolis",
            imgUrl: "https://g.delfi.lt/images/pix/300x200/T0N14OutztY/liudvikas-andriulis-78204091.jpg",
            likes: 15,
            comments: 12
        },


    ]


    const [sortId, setSortId] = useState(0)
    const [modalOn, setModalOn] = useState(0)


    function sortByComment () {
        if(sortId===1) return  setSortId(0)
        setSortId(1)

    }
    function sortByLikes() {
        if(sortId===2) return  setSortId(0)
        setSortId(2)


    }
    function sortByTime () {
        if(sortId===3) return  setSortId(0)
        setSortId(3)
    }

    function createPostOpen () {
    if (modalOn===1) return setModalOn(0)
    setModalOn(1)
    }



    return (
        <div className="vh-100 p-0 m-0 position-relative">
            {modalOn===1 &&
                <ModalCreatePost></ModalCreatePost>
            }
            <Toolbar></Toolbar>
            <div className="d-flex">
                <div className="bg-body-secondary mx-5 my-5 px-5 py-3 w-75 d-flex justify-content-between align-items-start border-radius-20 ">
                    <div className=""><span className="fs-4 fw-bold">Sort By:</span></div>
                    <Button onClick={sortByComment} variant="secondary" className="px-lg-4">Comment Amount
                        {sortId===1 ? <ArrowDown  color="white" size={25} /> : <ArrowUp  color="white" size={25} /> }
                    </Button>
                    <Button onClick={sortByLikes} variant="secondary" className="px-lg-4">Likes Amount
                        {sortId===2 ? <ArrowDown  color="white" size={25} /> : <ArrowUp  color="white" size={25} /> }
                    </Button>
                    <Button onClick={sortByTime} variant="secondary" className="px-lg-4">Time created
                        {sortId===3 ? <ArrowDown color="white" size={25} /> : <ArrowUp color="white" size={25} /> }
                    </Button>
                </div>
                <div className="  m-5  w-25 d-flex justify-content-center">
                    <Button onClick={createPostOpen} variant="success fs-3" >Create Post</Button>
                </div>
            </div>
            <div className="d-flex flex-wrap overflow-auto h-75">
                {posts && posts.map((x,i)=> (
                    <Posts key={i} x={x}></Posts>))}
            </div>

        </div>
    );
};

export default PostsPage;