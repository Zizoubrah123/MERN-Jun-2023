import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom'

const AuthorForm =  (props) => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]); 
    const nav = useNavigate()

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author/new', {
            name
        })
        .then((response)=>{
        console.log(response.data)
        setName("")
        nav('/')
        })
        .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
    }

    return ( 
        <>
        <button><Link to='/'>home</Link></button>
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}
            <p>
            <label>title:</label><br />
            <input type="text" onChange={e=>setName(e.target.value)} value={name} />
            </p>

            <input type="submit" />
        </form>
        </> 
    )
}

export default AuthorForm;

