import React, { Component } from 'react';
import ContactCard from './ContactCard'
import axios from 'axios'
import styled from 'styled-components';


class ContactList extends Component {
    constructor(){
        super();
        this.state = {
          user: {},
          contacts: []
        }
      }
    
      componentWillMount(){
        this._fetchContacts();
      }
    
      _fetchContacts = async () => {
        const id = this.props.userId;
        try {
          const response = await axios.get(`/api/users/${id}/contacts`);
          const contacts = response.data;
          this.setState({contacts});
        } catch (err) {
          this.setState({error: err})
        }
      }
    
    render(){
        return (
            <div>
               {this.props.contacts.map((contact) =>(
                 <ContactCard key={contact.id} contacts={contact} userId={this.props.userId}/>
               ))}
                </div>
        )
    }
}

ContactList.defaultProps = {
    contacts: []
}

export default ContactList;