import React from 'react'
import axios from 'axios';
import {useParams,} from 'react-router-dom'
import { useEffect, useState } from 'react'


const PeoplePlanet = () => {
    const [data, setData] = useState('');
    const {id,type} = useParams();


        useEffect(() => {
        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then((response)=>{
                console.log(response.data);
                setData(response.data)
            })
            .catch(err => console.log(err))
    }, [id,type]);
    // const PeoplePlanetFetch = () => {
    //     axios.get('https://swapi.py4e.com/api')
    //     .then((response)=>{
    //         console.log(response.data);
    //         setPeople(response.data.results)
    //     })
    //     .catch(err => console.log(err))
    // }

  return (
    <div>
        <h1>{data.name}</h1>
        {type === "planets" ? <><p>Climate: {data.climate}</p></>  : ""}
        {type === "planets" ? <><p>Terrain: {data.terrain}</p></>  : ""}
        {type === "planets" ? <><p>Surface Water: {data.surface_water}</p></>  : ""}
        {type === "planets" ? <><p>Population: {data.population}</p></>  : ""}

        {type === "people" ? <><p>Height: {data.height}</p></> : ""}
        {type === "people" ? <><p>Mass: {data.mass}</p></> : ""}
        {type === "people" ? <><p>Hair Color: {data.hair_color}</p></> : ""}
        {type === "people" ? <><p>Skin Color: {data.skin_color}</p></> : ""}
    </div>
  )
}

export default PeoplePlanet;
