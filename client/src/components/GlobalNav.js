import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
font-family: 'Oswald', sans-serif;
font-family: 'Special Elite', cursive;
  width: 100%;  
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  background-color: black;
  box-shadow: 0px 1px 6px black;
  a{
    text-decoration: none;
    color:white;
    margin: 0 5px;
    &:visited{
      color: white;
    }
  }
`

const GlobalNav = () => {
  return (
    <Nav>
      <div>
        <Link to="/">
        <h4>Home</h4>
        </Link>
      </div>
    </Nav>
  );
};

export default GlobalNav;