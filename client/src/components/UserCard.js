
import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const UserCard = (props) => {
  const user = props.user;
  return (
   <Link to={`/user/${user.id}`}>
       {/* //will add image */}
      
        <h3>{user.first_name}&nbsp;{user.last_name}</h3>
        <h3>{user.email}</h3>
      </Link>
  );
};

export default UserCard;