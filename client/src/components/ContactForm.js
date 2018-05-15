import React, { Component } from 'react'
import axios from 'axios'
import Contact from './Contact';

class ContactForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
        first_name: this.props.contact.first_name, 
        last_name: this.props.contact.last_name,
        phone_number: this.props.contact.phone_number
		}
	}

  handleInput = (e) => {
    this.props.resetNotification()
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const contact = {first_name: this.state.first_name,last_name: this.state.last_name, phone_number: this.state.phone_number}
    const userId = this.props.userId;
    axios.put(
        `/users/${userId}/contacts/${this.props.contact.id}`, {contacts: {first_name: '',last_name: '', phone_number: ''}})
    .then(response => {
      console.log(response)
      this.props.updateContact(response.data)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="tile">
      	<form onBlur={this.handleBlur} >
					<input className='input' type="text" name="first_name" placeholder='Enter a Title'
            value={this.state.first_name} onChange={this.handleInput}
            ref={this.props.titleRef} />
					<input className='input' name="phone_number" placeholder='Describe your idea'
            value={this.state.phone_number} onChange={this.handleInput}></input>
      	</form>
      </div>
    );
  }
}

export default ContactForm;