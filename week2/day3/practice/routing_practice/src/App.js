import React from "react";
import Home from "./components/Home";
import NumberWord from "./components/NumberWord";
import Color from "./components/Color";
import {
  Routes,
  Route
} from "react-router-dom";
    

function App() {
  return (
    <div>

      <Routes>
        {/* <Route path="/:word" element={<Hello/>} /> */}
        <Route path="/home" element={<Home/>} />
        <Route path="/:element" element={<NumberWord />}/>
        <Route path="/:colors/:bg/:word" element={<Color/>}/>
      </Routes>
    </div>  
  );
}
    
export default App;