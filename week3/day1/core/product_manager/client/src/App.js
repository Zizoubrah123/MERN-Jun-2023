import React from 'react';
import './App.css'
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom'
import PersonForm from './components/PersonForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />

        <Route path='/form' element={<PersonForm/>} />
      </Routes>
    </div>
  );
}
export default App;

