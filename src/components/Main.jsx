import React from "react";
import styled from "styled-components";

const Container = styled.article``;

const Image = styled.div`
  width: 30rem;
  height: 30rem;
  background-image: url(${(url) => url.url});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

function Main({ pokemon }) {
  return (
    <Container>
      <Image url={pokemon} />
    </Container>
  );
}

export default Main;
