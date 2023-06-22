import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subconponent from './components/Subconponent';
import Advetisement from './components/Advetisement';

function App() {
  return (
    <div className="app">
        <Header />
        <div className='mainFlex'>
        <Navigation />

        <Main>
          <div className='sub'>
          <Subconponent/>
          <Subconponent/>
          <Subconponent/>
          <Advetisement/>
          </div>
        </Main>
          
        </div>
    </div>
  );
}

export default App;
