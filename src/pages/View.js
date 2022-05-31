import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import http from "../http";

export default function View(props) {
    const [post, setPost] = useState({});
    const {id} = useParams();
    useEffect(()=> {
       fetchUser();
    },[])
    const fetchUser = () => {
        http.get('/posts/'+id).then(res =>{

            setPost({
                title:res.data.title,
                body:res.data.body,
                userId: res.data.userId
            });
        })
    }
    return(
        <div>
            <h2>User</h2>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
            <p>UserId: {post.userId}</p>
        </div>
    );
}
