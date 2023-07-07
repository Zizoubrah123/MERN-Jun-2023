import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate} from "react-router-dom"

export default props => {

    const [title, setTitle] = useState("");
    const [price, SetPrice] = useState("");
    const [description, SetDescription] = useState("");
    
const nav = useNavigate()

    const onSubmitHandler = e => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/people/new', {
            title,
            price,
            description
        })
        .then((response)=>{
        console.log(response.data)
        
        nav("/")
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    }

    return ( 
        <form onSubmit={onSubmitHandler}>
            <p>
            <label>First name:</label><br />
            <input type="text" onChange={e=>setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price:</label><br />
                <input type="number"onChange={e=>SetPrice(e.target.value)} />
            </p>
            <p>
                <label>Description:</label><br />
                <input type="text"onChange={e=>SetDescription(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}

