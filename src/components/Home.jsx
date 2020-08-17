import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Container = styled.div`
  height: 100vh;
  min-height: 60rem;
  width: 100%;
  background-color: #ffffff;
  border: 0.8rem solid #010101;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Home() {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
}

export default Home;
