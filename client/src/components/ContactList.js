import React, { Component } from 'react'
import axios from 'axios'
import Contact from './Contact'
import ContactForm from './ContactForm'
import update from 'immutability-helper'
import Notification from './Notification'
import styled from 'styled-components'

const ContactListStyle = styled.div`
  font-family: 'Oswald', sans-serif;
  font-family: 'Special Elite', cursive;
  input{
   width: 50%;
 }
`;

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      // users: {},
      // contacts: [],
      // editingContactId: null,
      // notification: '',
      // transitionIn: false
    };
  }
  updateSearch(event) {
   this.setState({search: event.target.value.substr(0,20)});
  }

  // componentDidMount() {
  //   const id = this.props.userId;
  //   axios.get(`/api/users/${id}/contacts`)
  //   .then(response => {
  //     this.setState({contacts: response.data})
  //     console.log(response)
  //   })
  //   .catch(error => console.log(error))
  // }

/*
  NEED TO HOOK UP THE FOLLOWING CODE

  ADD NEW CONTACT
  UPDATE CONTACT
  DELETE CONTACT
*/


  // addNewContact = () => {
  //   const id = this.props.userId;
  //   axios.post(`/api/users/${id}/contacts`, {contact: {first_name: '',last_name: '', phone_number: ''}})
  //   .then(response => {
  //     console.log(response);
  //     const contacts = update(this.state.contacts, { $splice: [[0, 0, response.data]]})
  //     this.setState({contacts: contacts, editingContactId: response.data.id})
  //   })
  //   .catch(error => console.log(error))
  // }

  // updateContact = (contact) => {
  //   const contactIndex = this.state.contacts.findIndex(x => x.id === contact.id)
  //   const contacts = update(this.state.contacts, {[contactIndex]: { $set: contact }})
  //   this.setState({contacts: contacts, notification: 'All changes saved', transitionIn: true})
  // }

  // deleteContact = (id) => {
  //   const userId = this.props.userId;
  //   const contactId = this.props.contact;
  //   axios.delete(`/api/users/${userId}/contacts/${contactId}`)
  //   .then(response => {
  //     const contactIndex = this.state.contacts.findIndex(x => x.id === id)
  //     const contacts = update(this.state.contacts, { $splice: [[contactIndex, 1]]})
  //     this.setState({contacts: contacts})
  //   })
  //   .catch(error => console.log(error))
  // }

  // resetNotification = () => {this.setState({notification: '', transitionIn: false})}

  // enableEditing = (id) => {
  //   this.setState({editingContactId: id}, () => { this.first_name.focus() })
  // }


  render() {

    let filteredContacts = this.props.contacts.filter(
      (contact) => {
        return contact.first_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
    <div>
        <div>
          {/* ADD NEW CONTACT BUTTON 
          <button className="newIdeaButton" onClick={this.addNewContact} >
            New Idea
          </button> */}

          {/* NOTIFICATION RESET WHEN CONTACT IS UPDATED
          <Notification in={this.state.transitionIn} notification= {this.state.notification} /> 
          */}
        </div>
          <ContactListStyle>
            <div class="searchBar"> 
              <input type="text" placeholder="Search.." value={this.state.search} onChange={this.updateSearch.bind(this)} />
            </div>
            <div class="col-xs-12">
              <ul>
                {filteredContacts.map((contact) => {

          /* CONTACT FORM AND RESET NOTIFICATION */
          // if(this.state.editingContactId === contact.id) {
          //   return(<ContactForm contact={contact} key={contact.id} updateContact={this.updateContact} userId={this.props.userId}
          //           titleRef= {input => this.first_name = input}
          //           resetNotification={this.resetNotification} />)
          // } else {

              return (<Contact contact={contact} key={contact.id}  onClick={this.enableEditing} userId={this.props.userId}
                    onDelete={this.deleteContact} />)
              }
            )}
          </ul>
        </div>
        </ContactListStyle>
        </div>
        );
      }
    }

ContactList.defaultProps = {
    contacts: []
}

export default ContactList;