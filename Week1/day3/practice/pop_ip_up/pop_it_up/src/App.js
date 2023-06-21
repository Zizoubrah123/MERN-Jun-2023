import MyNewComponenets from './components/MyNewComponents';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">

      <MyNewComponenets firstname={'aziz'} lasatname={'barrah'} age={20} haircolor={'brown'} />
      <MyNewComponenets firstname={'adem'} lasatname={'barrah'} age={12} haircolor={'black'} />
      <MyNewComponenets firstname={'maram'} lasatname={'bettaib'} age={17} haircolor={'brown'} />
      <MyNewComponenets firstname={'abdo'} lasatname={'manai'} age={20} haircolor={'black'} />
    </div>
  );
}

export default App;
