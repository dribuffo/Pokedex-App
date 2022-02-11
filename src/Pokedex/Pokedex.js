import Pokeview from "../Pokeview/Pokeview"
import pokeData from '../pokeData.js'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const  Pokedex = ({handleAddPokemonTeam}) => {
    const [toggle, setToggle] = useState(false);
    
    let pokeList = pokeData.map((mon, index) => {
        return(
            <div className="pokemonName" key={index}>
                <p>
                    <Link onClick={() => setToggle(!toggle)} to={'/Pokedex/' + mon}>{mon}</Link>
                </p>
            </div>
        )
    });
    
    
    return (
        <>
        {<Pokeview toggle={toggle} handleAddPokemonTeam={handleAddPokemonTeam}/>}
        <div className='pokemonList'>{pokeList}</div>
        </>
    )
}

export default Pokedex;