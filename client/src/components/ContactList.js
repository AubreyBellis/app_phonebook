// import React, { Component } from 'react';
// import ContactCard from './ContactCard'
// import axios from 'axios'
// import styled from 'styled-components';


// class ContactList extends Component {
//     constructor(){
//         super();
//         this.state = {
//           user: {},
//           contacts: []
//         }
//       }
    
//       componentWillMount(){
//         this._fetchContacts();
//       }
    
//       _fetchContacts = async () => {
//         const id = this.props.userId;
//         try {
//           const response = await axios.get(`/api/users/${id}/contacts`);
//           const contacts = response.data;
//           this.setState({contacts});
//         } catch (err) {
//           this.setState({error: err})
//         }
//       }
//       _deleteContact = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.delete(`/api/contacts/${this.props.match.params.id}`)
//             this.setState({redirect: true})
//             return res.data
            
    
//         } catch(err) {
//             console.log(err)
//         }
//     }
    
//     render(){
//         return (
//           <div>
              
//               {this.props.contacts.map((contact) =>(
//                  <ContactCard key={contact.id} contacts={contact} userId={this.props.userId} />
//                 ))}
//                   <button onClick={this._deleteContact}>(x)</button>
//                 </div>
//         )
//     }
// }

// ContactList.defaultProps = {
//     contacts: []
// }

// export default ContactList;


import React, { Component } from 'react'
import axios from 'axios'
import Contact from './Contact'
import ContactForm from './ContactForm'
import update from 'immutability-helper'
import Notification from './Notification'

class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: {},
      contacts: [],
      editingContactId: null,
      notification: '',
      transitionIn: false
    }
  }
  

  componentDidMount() {
    const id = this.props.userId;
    axios.get(`/api/users/${id}/contacts`)
    .then(response => {
      this.setState({contacts: response.data})
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  addNewContact = () => {
    const id = this.props.userId;
    axios.post(`/api/users/${id}/contacts`, {contact: {first_name: '',last_name: '', phone_number: ''}})
    .then(response => {
      console.log(response);
      const contacts = update(this.state.contacts, { $splice: [[0, 0, response.data]]})
      this.setState({contacts: contacts, editingContactId: response.data.id})
    })
    .catch(error => console.log(error))
  }

  updateContact = (contact) => {
    const contactIndex = this.state.contacts.findIndex(x => x.id === contact.id)
    const contacts = update(this.state.contacts, {[contactIndex]: { $set: contact }})
    this.setState({contacts: contacts, notification: 'All changes saved', transitionIn: true})
  }

  deleteContact = (id) => {
    const userId = this.props.userId;
    axios.delete(`/api/users/${userId}/contacts/${this.props.match.params.id}`)
    .then(response => {
      const contactIndex = this.state.contacts.findIndex(x => x.id === id)
      const contacts = update(this.state.contacts, { $splice: [[contactIndex, 1]]})
      this.setState({contacts: contacts})
    })
    .catch(error => console.log(error))
  }

  resetNotification = () => {this.setState({notification: '', transitionIn: false})}

  enableEditing = (id) => {
    this.setState({editingContactId: id}, () => { this.first_name.focus() })
  }

  render() {
    return (
      <div>
        <div>
          <button className="newIdeaButton" onClick={this.addNewContact} >
            New Idea
          </button>
          <Notification in={this.state.transitionIn} notification= {this.state.notification} />
        </div>
        {this.props.contacts.map((contact) => {
          if(this.state.editingContactId === contact.id) {
            return(<ContactForm contact={contact} key={contact.id} updateContact={this.updateContact} userId={this.props.userId}
                    titleRef= {input => this.first_name = input}
                    resetNotification={this.resetNotification} />)
          } else {
            return (<Contact contact={contact} key={contact.id}  onClick={this.enableEditing}
                    onDelete={this.deleteContact} />)
          }
        })}
      </div>
    );
  }
}
ContactList.defaultProps = {
    contacts: []
}

export default ContactList;