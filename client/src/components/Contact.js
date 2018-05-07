import React, { Component } from 'react'
import styled from 'styled-components';

const ContactStyles = styled.div`
	margin-top: 35px;
	margin-right: 20px;
	margin-left:25px;
	box-shadow: 1px 1px 5px black;
	text-align:center;

  h3 {
    margin-top: 5px;
  }
  h5 {
    text-align:center;
    color: black;
  }
  a{
    text-decoration: none;
    margin: 0 5px;
    &:visited{
      color: white;
		}
	.contactContainer{
		margin-left: 23px;
	}
`;

class Contact extends Component {

	/* CLICK EVENTS FOR UPDATE AND DELETING CONTACT */
	
	// handleClick = () => { this.props.onClick(this.props.contact.id) }

	// handleDelete = () => { this.props.onDelete(this.props.contact.id) }

	render () {
		return(
		  <div class="col-xs-12 contactContainer">
			<ContactStyles>
							<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
								<div class="col-xs-4">
									<p onClick={this.handleClick}>{this.props.contact.first_name}</p>
								</div>
								<div class="col-xs-4">
									<p onClick={this.handleClick}>{this.props.contact.last_name}</p>
								</div>
							</div>
							<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
		    			<p onClick={this.handleClick}>{this.props.contact.phone_number}</p>
						</div>
					</ContactStyles>
		  </div>
		)
	}
}

export default Contact;