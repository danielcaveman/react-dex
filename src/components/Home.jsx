import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Container = styled.div`
  height: 100vh;
  min-height: 60rem;
  width: 100%;
  background-color: #ffffff;
  border: 0.8rem solid #010101;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

function Home() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default Home;
