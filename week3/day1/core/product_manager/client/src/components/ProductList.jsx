import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product) =>
                <p key={product._id}>
                    <Link to={`/product/${product._id}`} >{product.title}</Link>
                    
                    </p>
            )}
        </div>
    )
}
    
export default ProductList;