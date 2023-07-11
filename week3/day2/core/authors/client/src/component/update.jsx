import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

const Update = () => {
    const { id } = useParams();
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([]); 
    const nav = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setName(res.data.name);
            })
    }, [id]);
    const UpdateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/'+ id,{
            name
        })
        .then((res)=>{
            console.log(res);
            nav("/")
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
            <div>
                <h1>update author</h1>
                <button><Link to='/'>home</Link></button>
            <form onSubmit={UpdateAuthor}>
                {errors.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}
                <p>
                    <label>author</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => {setName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
  )
}

export default Update