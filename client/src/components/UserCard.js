import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UserStyles = styled.div`
  width: 100%;
  margin: 20px 0; 
  box-shadow: 1px 1px 5px black;

  .firstName{
    text-align: center;
    color: black;
    
  }
  .userEmail{
    margin-top: 20px;
  }
  h3 {
    margin-top: 5px;
    font-size: 3vw;
    font-weight: bold;
  }
  h5 {
    text-align:center;
    color: black;
    font-size: 2.3vw;
  }
  a{
    text-decoration: none;
    margin: 0 5px;
    &:visited{
      color: white;
    }
`;

const UserCard = (props) => {
  const user = props.user;
  return (
    <UserStyles>
      <div clasName="col-xs-12">
        <Link to={`/user/${user.id}`}>

          <div className="firstName">
            <h3>{user.first_name}&nbsp;{user.last_name}</h3> 
          </div>
          <div className="userEmail">
            <h5>{user.email}</h5>
          </div>
          
        </Link>
      </div>
    </UserStyles>
  );
};

export default UserCard;