import React,{ useState, useEffect} from "react";
import http from "../http";
import { useNavigate,useParams } from "react-router-dom";

export default function Edit(props){
const [post, setPost] = useState({});
const redirect = useNavigate();
const {id} = useParams();

useEffect(() => {
    fetchPost();
},[]);

const fetchPost = () => {
http.get("/posts/"+id).then(res => {
    setPost({
        title:res.data.title,
        body:res.data.body,
    });
})
}

const onChangeTitle = (e) => {
    setPost({
        title:e.target.value,
        body:post.body
    });
}

const onChangeBody = (e) => {
    setPost({
        title:post.title,
        body:e.target.value,
    });
}
const onSubmitpost = () => {
    http.put('/posts/'+id,post).then(res =>{
        redirect('/');
    })
}
    return(
        <div>
            <h2>Edit post</h2>
            <div className="row">
            <div className="col-md-6 justify-content-center">
                <div className="form-group mb-2">
                    <label for="formGroupExampleInput">Title</label>
                    <input type="text" className="form-control" name="title"
                    onChange={onChangeTitle} value={post.title}/>
                </div>
                <div className="form-group mb-2">
                    <label for="formGroupExampleInput2">Body</label>
                    <textarea className="form-control" name="body" 
                    onChange={onChangeBody} value={post.body} rows="5" cols="33"/>
                </div>
                <button type="button" className="btn btn-primary" onClick={onSubmitpost}>Update</button>
            </div>
        </div>
        </div>
        )
}