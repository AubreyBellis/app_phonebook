import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ContactList from './ContactList'



class Contact extends Component {
  constructor(){
      super();
      this.state = {
        Contact: {
            first_name: '',
            last_name: '',
            phone_number:''
        },
        redirect: false
    };
}

componentWillMount(){
    this._fetchContacts();
  }

  _fetchContacts = async () => {
    const userId = this.props.userId;
    try {
      const response = await axios.get(`/api/users/${userId}/contacts`);
      const contacts = response.data;
      this.setState({contacts});
    } catch (err) {
      this.setState({error: err})
    }
  }

//   _deleteClassroom = async (e) => {
//       e.preventDefault();
//       try {
//           const res = await axios.delete(`/api/classrooms/${this.props.match.params.id}`)
//           this.setState({redirect: true})
//           return res.data
          

//       } catch(err) {
//           console.log(err)
//       }
//   }
  render() {
    return (
      <div>
        {this.state.redirect 
        ? 
            <Redirect to={'/'} />
        :


            <div>
    
            <h1><strong>Name: </strong> {this.state.contact.first_name}</h1>
            <p><strong>#{this.state.contacts.phone_number}</strong></p>
            <ContactList contacts={this.state.contacts} userId={this.props.match.params.id}/>

            {/* <Link to={`/classrooms/${this.props.match.params.id}/edit`}><button>Edit Classroom Information</button></Link>
            <button onClick={this._deleteClassroom}>Delete This Classroom</button> */}
          </div>

    }
    </div>
    )
  }
}

export default Contact;