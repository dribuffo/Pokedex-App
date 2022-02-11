
const MyTeam = ({myPokemonTeam, remove}) => {



    let roster = myPokemonTeam.map((pokemon, index) => {
        return (
            <div key={index}>
                <img src={pokemon.image} alt="pokemon image"/>
                <p>{pokemon.name}</p>
                <p></p>
                <button onClick={()=> remove(pokemon)}>Remove</button>
            </div>
        )
    });

  return (
    <>
        {roster}
    </>
  )
};

export default MyTeam;
