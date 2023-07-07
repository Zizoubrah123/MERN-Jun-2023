import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    import { Link } from 'react-router-dom';
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>title: {product.title}</p>
            <p>price: {product.price}</p>
            <p>description: {product.description}</p>
            <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
        </div>
    )
}
    
export default Detail;