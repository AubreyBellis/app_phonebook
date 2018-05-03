import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import { UserInfo } from '../styles/User';
import UserCard from './UserCard';
// import EditProfile from './EditProfile';

class ProfilePage extends Component {
    constructor() {
        super();
        this.state = {
            error: '',
            users: []
        }
        // this.onDrop = this.onDrop.bind(this);
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

    render() {
        return (
            <UserInfo>
                  {this.state.users.map((user) => (
                  <UserCard key={user.id} user={user} />))}
                  {/* <NewUserForm onNewUser={this.addNewUser} /> */}
            </UserInfo>
        );
    }
}

ProfilePage.defaultProps = {
    user: {
        data: {}
    }
}

export default ProfilePage;