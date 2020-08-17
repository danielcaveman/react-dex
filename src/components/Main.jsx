import React from "react";
import styled from "styled-components";

import ImageUrl from "../assets/pikachu.png";

const Container = styled.article``;

const Image = styled.div`
  width: 20rem;
  height: 20rem;
  background-image: url(${ImageUrl});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

function Main() {
  return (
    <Container>
      <Image />
    </Container>
  );
}

export default Main;
