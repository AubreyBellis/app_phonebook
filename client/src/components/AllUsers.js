import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import UserCard from './UserCard';
import styled from 'styled-components';

const UserListStyles = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-family: 'Nixie One', cursive;
  margin: 0px 5%;
  display: flex;
  flex-wrap: wrap;
 
  a{
    color: green;
  }
  .userHeader{
    padding: 0px;
    margin-bottom: 20px;
    font-family: 'Libre Baskerville', serif;
    text-align: center;
  }
  h1 {
    padding: 0px;
    font-weight: bold;
    font-size: 5vw;
  }
`;

class AllUsers extends Component{
  constructor(){
    super();
    this.state = {
      error: '',
      users: []
    }
  }

  componentWillMount(){
    this._fetchUsers();
  }

  _fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      const users = response.data;
      this.setState({users});
    } catch (err) {
      this.setState({error: err})
    }
  }
  
  render(){
    return (

         <UserListStyles>

            <div class="userHeader col-xs-12">

              <div class="heading">
                <h1>Select a User
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <Link to="/users/new">
                    <span class="glyphicon glyphicon-plus"></span>
                  </Link>
               </h1>
              </div>
      
            </div>

          {this.state.users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
              
        </UserListStyles>

    )
  }
}

export default AllUsers;