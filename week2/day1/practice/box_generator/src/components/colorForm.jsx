import React, {useState} from 'react';
    
    
const AddColor = (props) => {
    const [color, setColor] = useState("");


    const AddOneColor = (e) =>{
    e.preventDefault();
    props.setColors([...props.colors, color])
    setColor("");

  }

    
    return (
        <form onSubmit={(e)=>{AddOneColor(e)}}>
            Add color: <input onChange={(e)=>{setColor(e.target.value)}} value={color}/>
            <button>ADD</button>
        </form>
    );
};
    
export default AddColor;