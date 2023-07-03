import './App.css';
import {useState} from 'react';

function App() {

  const [pokemons, setPokemon] = useState([])

const fetchPoke = () => {
          fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            return response.json();

        }).then(response => {
          setPokemon(response.results)
          console.log(response);
        }).catch(err=>{
            console.log(err);
        });
      }

  return (
    <div className="App">
      <button onClick={fetchPoke}>fetch pokemon</button>
      <ul >
      {pokemons.map((pokemon)=>{
        return( <li key={pokemon.id}>{pokemon.name}</li> )
      })}
      </ul>


    </div>
  );
}

export default App;

