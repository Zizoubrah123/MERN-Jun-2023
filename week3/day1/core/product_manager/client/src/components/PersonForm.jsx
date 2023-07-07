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
        
        axios.post('http://localhost:8000/api/product/new', {
            title,
            price,
            description
        })
        .then((response)=>{
        console.log(response.data)
        setTitle(response.data.product.title)
        SetPrice(response.data.product.price)
        SetDescription(response.data.product.description)
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    }

    return ( 
        <form onSubmit={onSubmitHandler}>
            <p>
            <label>title:</label><br />
            <input type="text" onChange={e=>setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price:</label><br />
                <input type="number"onChange={e=>SetPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Description:</label><br />
                <input type="text"onChange={e=>SetDescription(e.target.value)} value={description} />
            </p>
            <input type="submit" />
        </form>
    )
}

