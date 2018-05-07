import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import UserCard from './UserCard';
import styled from 'styled-components';

const UserListStyles = styled.div`
  margin: 20px 5%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .addUserLink{
    margin-top: 10px;
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
      <div>
         <UserListStyles>
          <div class="col-xs-12">
            <div class="col-xs-1 col-lg-3"></div> 

              <div class="col-xs-6 col-lg-5">
                <h1>Select a User ::</h1>
              </div>
                <div class="col-xs-4 col-lg-4 addUserLink">
                  <h3><Link to="/users/new">(+)</Link></h3>
                </div>
            </div>

          {this.state.users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
              
        </UserListStyles>
      </div>
    )
  }
}

export default AllUsers;