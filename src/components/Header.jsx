import React from "react";
import styled from "styled-components";

const Container = styled.header`
  height: 20vh;
  width: 100%;
  padding: 1rem;
  background-color: #ff373a;
  border-bottom: 0.8rem solid #010101;
`;

const CameraOuter = styled.div`
  width: 8rem;
  height: 8rem;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #fbfffa;
  border: 0.1rem solid #010101;
  display: flex;
  align-items: stretch;
`;

const CameraInner = styled.div`
  width: 100%;
  border-radius: 50%;
  background-color: #00ffff;
  border: 0.1rem solid #010101;
`;

function Header() {
  return (
    <Container>
      <CameraOuter>
        <CameraInner />
      </CameraOuter>
    </Container>
  );
}

export default Header;
