import React  from "react";
import { Link } from 'react-router-dom'

let dex= "https://zeus.vwu.edu/~tjpepper/Pokedex/Images/PokedexClosed.png"


function Home() {
    return (
      <div>
        <h1>Welcome to the PokeDex!</h1>
        <h3>Click to open!</h3>
        <Link to='/Pokedex/:name'><img className="homeDex" src={dex} alt="closed pokdex"/></Link>
      </div>
    );
}

export default Home;
