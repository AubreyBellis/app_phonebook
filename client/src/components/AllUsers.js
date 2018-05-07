import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import UserCard from './UserCard';
import styled from 'styled-components';

const ArtistListStyles = styled.div`
  margin: 20px 5%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
     if (this.state.error){
       console.log(this.state.error)
      return <h1>YOU MUST LOGIN</h1>
    }
    return (
      <div>
        <div>
          </div>
      <ArtistListStyles>
        {this.state.users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
        <h3><Link to="/users/new">(+)</Link></h3>
      </ArtistListStyles>
      </div>
    )
  }
}

export default AllUsers;