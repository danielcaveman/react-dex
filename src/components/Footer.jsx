import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.footer`
  height: 25vh;
  width: 100%;
  padding: 1rem;
  background-color: #ff373a;
  border: 0.8rem solid #010101;
`;

const SearchOuter = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fbfffa;
  border: 0.1rem solid #010101;
  display: flex;
  align-items: stretch;
`;

const SearchInner = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #00ffff;
  border: 0.1rem solid #010101;
  overflow: hidden;
`;

const Input = styled.input`
  width: 100%;
  font-family: "Russo One", sans-serif;
  background-color: transparent;
  border: none;
  border-bottom: 0.1rem solid #000000;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #000000;
  }
  :-ms-input-placeholder {
    color: #000000;
  }
`;

const List = styled.ul`
  width: 100%;
  height: 8rem;
  list-style: none;
  margin-top: 1rem;
  overflow-y: scroll;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  font-size: 1.6rem;
`;

const ListButton = styled.button`
  font-family: "Russo One", sans-serif;
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  &:hover,
  &:active {
    color: #ff373a;
    background-color: transparent;
  }
`;

function Footer({ pokemon, pokemons, selectPokemon }) {
  const [filter, setFilter] = useState("");

  const filtered = (list, filter) => {
    return filter.length
      ? list.filter(
          (pokemon) =>
            pokemon.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
        )
      : list;
  };

  return (
    <Container>
      <SearchOuter>
        <SearchInner>
          <Input
            placeholder="Search..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <List>
            {filtered(pokemons, filter).map((poke, index) => (
              <ListItem key={index}>
                <ListButton
                  disabled={pokemon.name === poke.name}
                  onClick={() => selectPokemon(poke.url)}
                >
                  {poke.name}
                </ListButton>
              </ListItem>
            ))}
          </List>
        </SearchInner>
      </SearchOuter>
    </Container>
  );
}

export default Footer;
