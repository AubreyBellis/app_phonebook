import React, { Component } from 'react'

class Contact extends Component {

	/* CLICK EVENTS FOR UPDATE AND DELETING CONTACT */
	
	// handleClick = () => { this.props.onClick(this.props.contact.id) }

	// handleDelete = () => { this.props.onDelete(this.props.contact.id) }

	render () {
		return(
		  <div className="tile">
		  	<span className="deleteButton" onClick={this.handleDelete}>x</span>
		    <h4 onClick={this.handleClick}>{this.props.contact.first_name}</h4>
				<h4 onClick={this.handleClick}>{this.props.contact.last_name}</h4>
		    <p onClick={this.handleClick}>{this.props.contact.phone_number}</p>
		  </div>
		)
	}
}

export default Contact;