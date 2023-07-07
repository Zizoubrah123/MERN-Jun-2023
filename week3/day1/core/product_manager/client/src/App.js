import React from 'react';
import './App.css'
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom'
import PersonForm from './components/PersonForm';
import ProductList from './components/ProductList';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path="/product/:id" element={<Detail/>}  />
      </Routes>
    </div>
  );
}
export default App;

