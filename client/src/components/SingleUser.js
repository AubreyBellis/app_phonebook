import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ContactList from './ContactList'

const ArtistStyles = styled.div`
  img {
    max-height: 400px;
    width: 100%;
  }
`;

class SingleUser extends Component{
  constructor(){
    super();
    this.state = {
      user: {},
      contacts: []
    }
}

  componentWillMount(){
    this._fetchUserAndContacts();
  }

  _fetchUserAndContacts = async () => {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/users/${id}`)
    this.setState({
      user: res.data.user,
      contacts: res.data.contacts
    })
  }
  _deleteUser = async (e) => {
    e.preventDefault();
    try {
        const id = this.props.match.params.id;
        const res = await axios.delete(`/api/users/${id}`)
        this.setState({redirect: true})
        return res.data
        

    } catch(err) {
        console.log(err)
    }
}


  render(){
    return (

        <div>
        {this.state.redirect 
        ? 
            <Redirect to={'/users'} />
        :


         <div>
      <ArtistStyles>
        <button onClick={this._deleteUser}>X</button>
        <button><Link to={`/users/${this.props.match.params.id}/edit`}>Edit Teacher</Link></button>
        <h1>{this.state.user.first_name}</h1>
        <h4>Nationality: {this.state.user.email}</h4>
        <h3>Contacts</h3>
        {this.state.contacts.map(contact => (
          <div key={contact.id}>
          <ContactList contacts={this.state.contacts} userId={this.props.match.params.id}/>
          </div>
        ))}
      </ArtistStyles>
      </div>
        }
    </div>
     )
  }
}

export default SingleUser