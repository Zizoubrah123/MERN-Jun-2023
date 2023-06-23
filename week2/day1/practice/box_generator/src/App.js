import './App.css';
import AddColor from './components/colorForm';
import ColorDisplay from './components/colorDisplay';
import React, { useState } from 'react';

    
    
function App() {
    const [colors, setColors] = useState(["red", "blue", "green" ]);
    
    return (
<div className="App" >
      <AddColor colors={colors} setColors={setColors} />
      {colors.map((color, index)=>{
        return <ColorDisplay key={index} color={color}/>
      })} 
    </div>
    );
}
    

export default App;

