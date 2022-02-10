//Dependencies
import './App.css';
import { Routes, Link, Route} from 'react-router-dom'
import React, { useState } from 'react';

//components
import Pokedex from './Pokedex/Pokedex'
import MyTeam from './MyTeam/MyTeam'
import Pokeview from './Pokeview/Pokeview'
import Home from './Home/Home'

//links
let pokelogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/Pokedex'><h2>Pokedex</h2></Link>
        <Link to='/'><img src={pokelogo} alt="pokemon logo" height="120px" width="300px"/></Link>
        <Link to='/myteam'><h2>My Team</h2></Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Pokedex' element={<Pokedex />} />
          <Route path='/myteam' element={<MyTeam />} />
          <Route path='/pokeview/:param' element={<Pokeview />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
