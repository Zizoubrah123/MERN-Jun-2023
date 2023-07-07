import React from 'react';
import './App.css'
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom'
import Detail from './components/Detail';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path="/product/:id" element={<Detail/>}/>
        <Route element={<Update/>} path="/product/:id/edit"/>

      </Routes>
    </div>
  );
}
export default App;

