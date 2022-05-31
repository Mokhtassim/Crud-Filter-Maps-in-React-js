import  React,{ useState } from "react";
import {Users} from "../users";
import Table from "./Table";
export default function Filter(){
    // const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");
    const keys = ["first_name","last_name","email"];

    const searchItem = (data) => {
       return data.filter(item => 
        keys.some(key =>item[key].toLowerCase().includes(query.toLowerCase())))
    }


    return(
        <div>
            <h2>Filter</h2>
            <input className="form-control" 
                    type="text" 
                    placeholder="Search..." 
                    onChange={e => setQuery(e.target.value)}/>
            <Table data={searchItem(Users)}/>
        </div>
        )
}