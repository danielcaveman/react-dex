import React from "react";
import styled, { keyframes } from "styled-components";

import loader from "../assets/pokeball.png";

const Container = styled.article``;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  width: 15rem;
  height: 15rem;
  background-image: url(${(url) => url.url});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 600px) {
    width: 20rem;
    height: 20rem;
  }
`;

const Detail = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
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
        <Content>
          {pokemon.name ? (
            <>
              <Image url={pokemon.url} />
              <Detail>
                <Text>Name: {pokemon.name}</Text>
                <Text>Type: {pokemon.type}</Text>
              </Detail>
            </>
          ) : (
            <></>
          )}
        </Content>
      ) : (
        <Loader />
      )}
    </Container>
  );
}

export default Main;
