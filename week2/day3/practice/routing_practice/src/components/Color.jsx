import React from 'react'
import {useParams} from "react-router-dom";

const Hello = (props) => { 
  const {colors,bg, word } = useParams(); // matches our :city in our Routes
    const style = { 
      color: colors,
      backgroundColor: bg
    }
  return (
    <h1 style={style}>this word is :{ word }!</h1>
  );
}
export default Hello;