import axios from 'axios';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';




const PokemonList = () => {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
      setPokemon(res.data.results);
    })
  }, [])


 

  return (
    <div>
      <h1>POKEMON:</h1>
      {pokemon.map((poke, i)=> {
        return <Link key={i} to={`/pokemon/${poke.name}`}>
          <p>{poke.name}</p>
        </Link>
      })}
    </div>
  )
}

export default PokemonList