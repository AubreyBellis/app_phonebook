import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import UserCard from './UserCard';
import styled from 'styled-components';

const UserListStyles = styled.div`
  font-family: 'Oswald', sans-serif;
  font-family: 'Special Elite', cursive;
  margin: 0px 5%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
 
  .addUserLink{
    margin-top: 10px;
    color: green;
    font-size: 25px;
  }
  a{
    color: green;
  }
  .userHeader{
    margin-bottom: 20px;
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
          <div class="col-xs-12 userHeader">
            <div class="col-xs-2 col-sm-1 col-md-1 col-lg-1"></div> 

              <div class="col-xs-8 col-sm-6 col-md-9 col-lg-8">
                <h1>Select User::</h1>
              </div>
                <div class="col-xs-1 col-sm-5 col-md-2 col-lg-3 addUserLink">
                  <h3><Link to="/users/new">(+)</Link></h3>
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