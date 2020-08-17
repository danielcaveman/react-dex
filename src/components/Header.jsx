import React from "react";
import styled from "styled-components";

const Container = styled.header``;

const Figures = styled.div`
  height: 17vh;
  width: 100%;
  padding: 1rem;
  background-color: #ff373a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1rem solid #010101;
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

const ColouredCicles = styled.div`
  display: flex;
  width: 8.5rem;
  justify-content: space-between;
`;

const Circle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: 0.2rem solid #010101;
`;

const Shapes = styled.div`
  display: flex;
  transform: translateY(-1rem);
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  position: relative;
  border-top: 9.5rem solid #000000;
  border-right: 9.5rem solid transparent;
  &:after {
    content: "";
    width: 0;
    height: 0;
    top: -10rem;
    position: absolute;
    border-top: 9rem solid #ff373a;
    border-right: 9rem solid transparent;
  }
`;

const Rectangle = styled.div`
  width: 30vw;
  height: 10.5rem;
  transform: translateY(-1rem);
  background-color: #ff373a;
  border-bottom: 1rem solid #010101;
`;

function Header() {
  return (
    <Container>
      <Figures>
        <CameraOuter>
          <CameraInner />
        </CameraOuter>
        <ColouredCicles>
          <Circle color="#fa0107" />
          <Circle color="#fef009" />
          <Circle color="#00a957" />
        </ColouredCicles>
      </Figures>
      <Shapes>
        <Rectangle />
        <Triangle />
      </Shapes>
    </Container>
  );
}

export default Header;
