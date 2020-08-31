import React from "react";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 30vh;
  border: 0.8rem solid #010101;
  border-bottom: none;
`;

const Figures = styled.div`
  padding: 1rem;
  background-color: #ff373a;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  position: relative;
`;

const Front = styled.div`
  position: absolute;
  top: 0;
  display: flex;
`;

const Back = styled.div`
  display: flex;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: ${({ size, color }) => `${size} solid ${color}`};
  border-right: ${({ size, color }) => `${size} solid transparent`};
`;

const Rectangle = styled.div`
  width: 50vw;
  height: ${({ size }) => size};
  background-color: ${({ color }) => color};
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 1rem;
  background-color: ${({ color }) => color};
`;

function Header() {
  const size = 7;
  const border = 1;
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
        <Back>
          <Rectangle color="#000000" size={`${size}rem`} />
          <Triangle color="#000000" size={`${size}rem`} />
          <Line color="#000000" size={`${border}rem`} />
        </Back>
        <Front>
          <Rectangle color="#ff373a" size={`${size - border}rem`} />
          <Triangle color="#ff373a" size={`${size - border}rem`} />
        </Front>
      </Shapes>
    </Container>
  );
}

export default Header;
