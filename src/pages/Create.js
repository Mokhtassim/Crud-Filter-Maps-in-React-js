import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import http from "../http";

export default function Create() {
    const navigate= useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }
    const onChangeBody = (event) => {
        setBody(event.target.value);
    }
    const onSubmitUser = () => {
        
       const userId = Math.floor(Math.random() * (10 - 1)) + 1;
        http.post('/users', {
            title,
            body,
            userId: userId
        }).then(response => {
        setTitle('');
        setBody('');
        console.log(response);
        // navigate('/');
        })
    }
    return( 
        <div>
        <h2>New User</h2>
        <div className="row">
            <div className="col-md-6 justify-content-center">
                <div className="form-group mb-2">
                    <label for="formGroupExampleInput">Title</label>
                    <input type="text" className="form-control" name="title"
                    onChange={onChangeTitle} value={title}/>
                </div>
                <div className="form-group mb-2">
                    <label for="formGroupExampleInput2">Body</label>
                    <input type="text" className="form-control" name="body" 
                    onChange={onChangeBody} value={body}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={onSubmitUser}>Create</button>
            </div>
        </div>
        </div>
    )
}