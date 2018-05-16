import React, { Component } from 'react'
import styled from 'styled-components';

const ContactStyles = styled.div`
	margin-top: 40px;
	text-align: center;

	.contactNumber {
		padding-top: 30px;
		padding-bottom: 30px;
		padding-left: 0;
	}
	.contactFirstName {
		padding-right: 0;
		padding-left: 5px;
	}
	.contactLastName {
		padding-left: 0;
		padding-right: 5px;
		padding-bottom: 5px;
	}

`;

class Contact extends Component {

	/* CLICK EVENTS FOR UPDATE AND DELETING CONTACT */
	
	// handleClick = () => { this.props.onClick(this.props.contact.id) }

	// handleDelete = () => { this.props.onDelete(this.props.contact.id) }

	render () {
		return(
			<ContactStyles>
				 <div class="contactContainer">
					{/* <div class="col-md-3"></div> */}

					<div class="col-xs-12 col-sm-8">
						<div class="col-xs-6 col-sm-4 contactFirstName">
							<h4 onClick={this.handleClick}>{this.props.contact.first_name}</h4>
						</div>
						<div class="col-xs-6 col-sm-4 contactLastName">
							<h4 onClick={this.handleClick}>{this.props.contact.last_name}</h4>
						</div>
					</div>
				{/* <div class="col-md-1"></div> */}


					<div class="col-xs-12 col-sm-4 contactNumber">
						<span onClick={this.handleClick}>{this.props.contact.phone_number}</span>
					</div>
				</div>
					</ContactStyles>
		)
	}
}

export default Contact;