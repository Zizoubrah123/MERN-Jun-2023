import NewComponent from './components/NewComponent'

import './App.css';

  const person =[
  { 
    id: 0,
    "firstName":"aziz",
    "lastName":"barah",
    "age":45,
    "hairColor":"Black"
  },
  { 
    id: 1,
    "firstName":"adem",
    "lastName":"Smith",
    "age":88,
    "hairColor":"Brown"
  },
  {
    id: 2,
    "firstName":"barrah",
    "lastName":"Fillmore",
    "age":50,
    "hairColor":"Brown"
  },
  { 
    id: 3,
    "firstName":"abdo",
    "lastName":"Smith",
    "age":62,
    "hairColor":"Brown"
  }
]

function App() {
  return (
    <div className="App">

      {person.map( function(person, i){
        return <NewComponent firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>
      })}
    </div>
  );
}
export default App;
