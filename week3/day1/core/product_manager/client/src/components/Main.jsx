
import React, { useEffect, useState } from 'react'
import PersonForm from './PersonForm';
import ProductList from './ProductList';
import axios from 'axios';


const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    
    return (
        <div>
           <PersonForm/>
           <hr/>
           {loaded && <ProductList products={products}/>}
        </div>
    )
}
    
export default Main;