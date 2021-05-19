import axios from 'axios';
import {useEffect, useState} from 'react';


const Pokemon = (props) => {

  const [poke, setPoke] = useState({});
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`).then(res => {
      setPoke(res.data)
    }).catch(err => console.log(err))
  }, [props.match.params.name])

  console.log(poke);


  return (
    <div>
      <p>Name: {props.match.params.name}</p>
      <p>Weight: {poke.weight}</p>
      <img src={poke.sprites?.front_default} style={{imageRendering: 'pixelated', width: '300px'}} alt={poke.name} />
    </div>
  )
}

export default Pokemon