import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ArtistStyles = styled.div`
  width: 30%;
  margin: 20px 0; 
  box-shadow: 1px 1px 5px black;
  img {
    width: 100%;
    max-height: 200px;
  }
  h3{
    padding: 5px 0;
  }
`;

const UserCard = (props) => {
  const user = props.user;
  return (
    <ArtistStyles>
      <Link to={`/user/${user.id}`}>
        <h3>{user.email}</h3>
      </Link>
    </ArtistStyles>
  );
};

export default UserCard;