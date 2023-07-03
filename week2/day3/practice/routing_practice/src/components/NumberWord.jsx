import React from 'react'
import {useParams} from "react-router-dom";



const NumberWord = (props) => { 
    const {element} = useParams();
  return (
    <div>
        {isNaN(element) ? <h1>The word is: {element}</h1> : <h1>The number is: {element}</h1>}
    </div>
  )
}
export default NumberWord;