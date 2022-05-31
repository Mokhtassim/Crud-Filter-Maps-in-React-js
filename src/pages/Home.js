import React,{ useState,useEffect } from "react";
import {Link} from "react-router-dom";
import http from "../http";

export default function Home(){
    const options = [
        {
            label: "One",
            value: "1"
        },
        {
            label: "Two",
            value: "2"
        },
        {
            label: "Tree",
            value: "3"
        },
        {
            label: "Four",
            value: "4"
        },
        {
            label: "Five",
            value: "5"
        },
        {
            label: "Sexe",
            value: "6"
        },
        {
            label: "Seven",
            value: "7"
        },
        {
            label: "eight",
            value: "8"
        },
        {
            label: "Nine",
            value: "9"
        },
        {
            label: "Ten",
            value: "10"
        },
        {
            label: "All",
            value: "all"
        }
    ];
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');
    const filterPost = (e) => {
        const userId = e.target.value;
        // console.log(e.target.value);
        http.get('/posts?userId='+ userId).then(result => {
            if (userId !== "choose")
            {

                setPosts([]);
                if(userId === "all")
                {
                    fetchAllpost();
                }
                else{
                    setPosts(result.data);
                }
            }
        })
    }

    useEffect(() => {
        fetchAllpost();
    },[])

    const fetchAllpost = () => {
        http.get('/posts').then(post=>{
            setPosts(post.data)
        })
    }

    const ondeletepost = (id) => {
        http.delete('/posts/'+id).then(res => {
            fetchAllpost();
        })
    }
    return(
            <div>
            <h4>Listing posts...</h4>
            <div className="row">
                <div className="col-md-9 ">
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text">Filter by UserId</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01" style={{width: '20%'}} onChange={filterPost} value="all">
                            {options.map((item,i) =>(
                                <option key={i} value={item.value}>{item.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-3">
                        <input type="text" onChange={(e) => {
                            setSearchTitle(e.target.value);
                            }} placeholder="Title..."/>
                    </div>
                </div>
            </div>
           
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">UserId</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.filter((val)=> {
                        if(searchTitle === ""){
                            return val
                        }
                        else if(val.title.toLowerCase().includes(searchTitle.toLowerCase())){
                            return val
                        }

                    }).map((post,i) => (
                        <tr key={i}>
                        <th scope="row">{post.userId}</th>
                        <td>{post.title.slice(0,20)}...</td>
                        <td>{post.body.slice(0,50)}...</td>
                        <td><Link className="btn btn-info" to={"/edit/"+post.id}> Edit</Link></td>
                        <td><Link className="btn btn-primary" to={{ pathname: "/view/"+post.id}}>View</Link></td>
                        <td><button className="btn btn-danger" onClick={() => ondeletepost(post.id)}>delete</button></td>
                        </tr>
                    ) )
                        }
                    </tbody>
            </table>
            </div>
        );
}