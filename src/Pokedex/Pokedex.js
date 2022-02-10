import Pokeview from "../Pokeview/Pokeview"
import pokeData from '../pokeData.js'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const  Pokedex = () => {
    // const [pokemon, setPokemon] = useState("bulbasaur")
    
    // function handleSetPokemon(name) {
    //     setPokemon(name)
    // }    


    let pokeList = pokeData.map((mon, index) => {
        return(
            <div className="pokemonName" key={index}>
                {/* <p onClick={() => handleSetPokemon(mon)}> */}
                <p>
                    {mon}
                </p>
            </div>
        )
    });
    
    
    return (
        <>
            <div className='pokemonList'>{pokeList}</div>
            {/* {<Pokeview name={setPokemon}/>} */}
        </>
    )
}

export default Pokedex;