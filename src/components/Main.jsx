import React from "react";
import styled from "styled-components";

const Container = styled.article``;

const Image = styled.div`
  width: 25rem;
  height: 25rem;
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
