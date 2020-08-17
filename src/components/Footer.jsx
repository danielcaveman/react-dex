import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  height: 20vh;
  width: 100%;
  padding: 1rem;
  background-color: #ff373a;
  border-top: 0.8rem solid #010101;
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
  border-radius: 0.5rem;
  background-color: #00ffff;
  border: 0.1rem solid #010101;
`;

function Footer() {
  return (
    <Container>
      <SearchOuter>
        <SearchInner />
      </SearchOuter>
    </Container>
  );
}

export default Footer;
