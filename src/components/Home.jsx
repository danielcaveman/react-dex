import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { Pokedex } from "../services/Pokedex";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #ffffff;
  border: 0.8rem solid #010101;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

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
    <Container>
      <Header />
      <Main pokemon={pokemon} animation={animation} />
      <Footer
        pokemon={pokemon}
        pokemons={pokemons}
        selectPokemon={selectPokemon}
      />
    </Container>
  );
}

export default Home;
