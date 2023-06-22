import PersonCard  from './components/MyNewComponents';
import './App.css';
import React from 'react';


const peopleArr =[
  {"firstName":"aziz", "lastName":"barah", "age":45, "hairColor":"Black"},
  {"firstName":"adem", "lastName":"Smith","age":88,"hairColor":"Brown"},
  {"firstName":"marrah", "lastName":"Fillmore","age":50,"hairColor":"Brown"},
  {"firstName":"abdo", "lastName":"Smith","age":62,"hairColor":"Brown"}
]


function App() {
  return (
    <div className="App">

      {peopleArr.map(person => {
        return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
      })
      
      }

    </div>
  );
}

export default App;
