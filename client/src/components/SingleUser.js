import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ContactList from './ContactList'



class SingleUser extends Component {
  constructor(){
      super();
      this.state = {
          contacts:[],
          user: {
              first_name: '',
              last_name: '',
              email:''
          },
          redirect: false
      };
  }

componentWillMount(){
      const userId = this.props.match.params.id;
      this._fetchUsersAndContacts();
      
  }

  _fetchUsersAndContacts = async () => {
      try {
          const id = this.props.match.params.id;
          const res = await axios.get(`/api/users/${id}/contacts`)
          await this.setState({
           user: res.data.user,
              contacts: res.data.contacts
          })
        
          return res.data
          console.log(res.data)
      }
      catch(err) {
          console.log(err)
      }
  }
  _deleteUser = async (e) => {
      e.preventDefault();
      try {
          const res = await axios.delete(`/api/users/${this.props.match.params.id}`)
          this.setState({redirect: true})
          return res.data
          

      } catch(err) {
          console.log(err)
      }
  }
  render() {
    return (
      <div>
        {this.state.redirect 
        ? 
            <Redirect to={'/'} />
        :


            <div>
        
            <h1><strong>Name: </strong> {this.state.user.first_name}</h1>
            <p><strong>Email: </strong> {this.state.user.email}</p>
            <p><strong>Contacts:</strong></p>
            <ContactList contacts={this.state.contacts} userId={this.props.match.params.id}/>
            {/* <Link to={`/teachers/${this.props.match.params.id}/edit`}><button>Edit Teacher</button></Link> */}
            <button onClick={this._deleteContact}>Delete This Contact</button>
          
      </div>

    }
    </div>
    )
  }
}

export default SingleUser;