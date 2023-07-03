import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {

  const [pokemons, setPokemons] = useState([])
  useEffect(()=>{
    
  },[])
  const axiosFetch = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((response) =>{
        console.log(response.data)
        setPokemons(response.data.results)
      })
      .catch(err => console.log(err))
    }; 



// const fetchPoke = () => {
//           fetch("https://pokeapi.co/api/v2/pokemon")
//           .then(response => {
//             return response.json();

//         }).then(response => {
//           setPokemons(response.results)
//           console.log(response);
//         }).catch(err=>{
//             console.log(err);
//         });
//       }

  return (
    <div className="App">
      <button onClick={axiosFetch}>fetch pokemon</button>
        <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
          


    </div>
  );
}

export default App;