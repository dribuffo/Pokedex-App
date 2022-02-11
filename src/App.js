//Dependencies
import './App.css';
import { Routes, Link, Route} from 'react-router-dom'
import React, { useState } from 'react';

//components
import Pokedex from './Pokedex/Pokedex'
import MyTeam from './MyTeam/MyTeam'
import Home from './Home/Home'

//links
let pokelogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"

function App() {
  const [myPokemonTeam, setMyPokemonTeam] = useState([]);

  const handleAddPokemonTeam = (name, image) =>{
    if (myPokemonTeam.length < 6) {
    const addToTeam= [...myPokemonTeam]
    addToTeam.push({name, image})
      setMyPokemonTeam(addToTeam); 
    } else {
      console.log("Oak: <Player Name> Now is not the time to use that!")
    }   
    
  }

  const remove = (object) => {
    const teamCopy = [...myPokemonTeam]
    const filteredTeam = teamCopy.filter((pokemon) => pokemon !== object);
    setMyPokemonTeam(filteredTeam) 
  }

  return (
    <div className="App">
      <nav>
        <Link to='/Pokedex/:name'><h2>Pokedex</h2></Link>
        <Link to='/'><img src={pokelogo} alt="pokemon logo" height="120px" width="300px"/></Link>
        <Link to='/myteam'><h2>My Team</h2></Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Pokedex/:name' element={<Pokedex handleAddPokemonTeam={handleAddPokemonTeam}/>} />
          <Route path='/myteam' element={<MyTeam myPokemonTeam={myPokemonTeam} remove={remove}/>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
