import React, { useState, useEffect } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { Pokedex } from "../services/Pokedex";

function Home() {
  const pokedex = new Pokedex();

  const [animation, setAnimation] = useState(false);
  const [pokemon, setPokemon] = useState({});
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    pokedex.getPokemons(setPokemons);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 1000);
  }, [pokemon]);

  const selectPokemon = (pokemonUrl) => {
    setAnimation(true);
    pokedex.getPokemon(pokemonUrl, setPokemon);
  };

  return (
    <>
      <Header />
      <Main pokemon={pokemon} animation={animation} />
      <Footer
        pokemon={pokemon}
        pokemons={pokemons}
        selectPokemon={selectPokemon}
      />
    </>
  );
}

export default Home;
