import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  height: 25vh;
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
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #00ffff;
  border: 0.1rem solid #010101;
  overflow: hidden;
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 0.1rem solid #000000;
  outline: none;
`;

const List = styled.ul`
  width: 100%;
  height: 8rem;
  list-style: none;
  margin-top: 1rem;
  overflow-y: scroll;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  font-size: 1.6rem;
`;

function Footer() {
  return (
    <Container>
      <SearchOuter>
        <SearchInner>
          <Input />
          <List>
            <ListItem>Picachu</ListItem>
            <ListItem>Picachu</ListItem>
            <ListItem>Picachu</ListItem>
            <ListItem>Picachu</ListItem>
            <ListItem>Picachu</ListItem>
            <ListItem>Picachu</ListItem>
            <ListItem>Picachu</ListItem>
            <ListItem>Picachu</ListItem>
            <ListItem>Picachu</ListItem>
          </List>
        </SearchInner>
      </SearchOuter>
    </Container>
  );
}

export default Footer;
