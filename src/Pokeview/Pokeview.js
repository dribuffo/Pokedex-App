//Dependencies
import { useParams } from "react-router";
import { useEffect, useState } from "react";

//Components
import MyTeam from '../MyTeam/MyTeam'

const Pokeview = () => {
  let params = useParams();
  let pokemonName = params.param.toLowerCase();

  const [pokemon, setPokemon] = useState([]);

  //useEffect state around the API call to call it once, not infinite loop.
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/` + `${pokemonName}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch(() => console.log("oops, no pokemon found"));
    console.log(pokemon);
  }, []);

  //setting pokemon image equal to a variable so I can pass it later
  let pokemonImage = pokemon?.sprites?.front_default;

  //function to loop through and output pokemon types
  let battleType = [];
  if (pokemon.types !== undefined) {
      if (pokemon.types.length === 2) {
          battleType = [pokemon.types[0].type.name, " ", pokemon.types[1].type.name]
      } else {
          battleType = [pokemon.types[0].type.name]
      }
    }

  return (
    <div>
      {/* Regular and Shiny Pokmon image */}
      <img src={pokemonImage} alt="pokemon photo" />{" "}
      <img src={pokemon?.sprites?.front_shiny} alt="shiny pokemon photo" />
      {/* Pokemon Name */}
      <h4> {pokemon?.name} </h4>
      {/* Height */}
      <p>Height: {pokemon?.height}</p>
      {/* Weight */}
      <p>Weight: {pokemon?.weight}</p>
      {/* Type */}
      <p>Type: {battleType} </p>
      <p>{/* Japanese name...?*/}</p>
      <button onClick={() => <MyTeam image={pokemonImage}/>}>Add to Team</button>
    </div>
  );
};

export default Pokeview;
