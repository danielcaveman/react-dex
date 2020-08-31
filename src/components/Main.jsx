import React from "react";
import styled, { keyframes } from "styled-components";

import loader from "../assets/pokeball.png";

const Container = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 0.8rem solid #010101;
  border-bottom: none;
  border-top: none;
  min-height: 45vh;
`;

const rotateClockwise = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  width: 20rem;
  height: 20rem;
  background-image: url(${loader});
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${rotateClockwise} 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
`;

const Image = styled.div`
  width: 20rem;
  height: 20rem;
  background-image: url(${(url) => url.url});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const Detail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 0.1rem solid #000000;
`;

const Text = styled.p`
  font-family: "Russo One", sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

function Main({ pokemon, animation }) {
  return (
    <Container>
      {!animation ? (
        pokemon.name ? (
          <>
            <Image url={pokemon.url} />
            <Detail>
              <Text>Name: {pokemon.name}</Text>
              <Text>Type: {pokemon.type}</Text>
            </Detail>
          </>
        ) : (
          <></>
        )
      ) : (
        <Loader />
      )}
    </Container>
  );
}

export default Main;
