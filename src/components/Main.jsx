import React from "react";
import styled, { keyframes } from "styled-components";

import loader from "../assets/pokeball.png";

const Container = styled.article``;

const rotateClockwise = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  width: 10rem;
  height: 10rem;
  background-image: url(${loader});
  background-size: cover;
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

function Main({ pokemon, animation }) {
  return (
    <Container>
      {!animation ? <Image url={pokemon.url} /> : <Loader />}
    </Container>
  );
}

export default Main;
