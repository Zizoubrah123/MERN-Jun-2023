import './App.css';
import PeoplePlanet from './components/people';
import React from 'react';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import {Routes, Route} from "react-router-dom";
function App() {

  const [type, setType] = useState("people")
  const [id, setId] = useState(0)

    const nav = useNavigate();


  const submitHandler = (e) =>{
    e.preventDefault()
    nav("/"+type+"/" + id)
  }
  return (

    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor="">search for : </label>
          <select name="type" id='type' onChange={(e)=>{setType(e.target.value)}} value={type}>
            <option value="people">people</option>
            <option value="planets">planet</option>
          </select>   
        <input type="number" placeholder='id'  onChange= {(e) =>setId(e.target.value) } value={id}/>
        <button>search</button>
      </form>
      <Routes>
          <Route path="/" element={ <h1>Welcome</h1> }/>
        <Route path='/:type/:id' element={<PeoplePlanet/>} />
      </Routes> 
    </div>
  );
}

export default App;
