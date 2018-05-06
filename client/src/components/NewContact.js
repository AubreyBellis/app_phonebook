import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class NewContact extends Component {
  constructor(){
    super();
    this.state = {
      errors: '',      
      redirect: false,   
      contact: {
        first_name: '',
        last_name: '',
        phone_number: ''
      }
    }
  }

  _newContact = async (e) => {
    try {
      e.preventDefault();
      const contact = this.state.contact
      const userId = this.props.match.params.userId;
      await axios.post(`/api/users/${userId}/contacts`, contact)
    
      const redirect = !this.state.redirect
      this.setState({redirect: true})
    } catch (err) {
    this.setState({error: err})
    }
  }

  _handleChange = (e) => {
    const newState = {...this.state.contact}
    newState[e.target.name] = e.target.value
    this.setState({
      contact: newState
    })
  }


  render() {
    const userId = this.props.match.params.userId;
  
    return (
      <div>
      <div className="container">
        <h5 className="form-title">New Contact</h5>

        <form onSubmit={this._newContact} className="z-depth-1">

          <div className="input-field col s8">
            <input onChange={this._handleChange} type="text" name="first_name" value={this.state.contact.first_name} />
            <label htmlFor="first_name">First Name</label>
          </div>

          <div className="input-field col s8">
            <input onChange={this._handleChange} type="text" name="last_name" value={this.state.contact.last_name} />
            <label htmlFor="last_name">Last Name </label>
          </div>

          <div className="input-field col s8">
            <input onChange={this._handleChange} type="text" name="phone_number" value={this.state.contact.phone_number} />
            <label htmlFor="phone_number">Phone Number </label>
          </div>

          <div>
          </div>
            <br/>
          <div>
            <button className="btn waves-effect waves-light blue-grey lighten-2 z-depth-1">Submit<i className="material-icons md-18 right">send</i></button>
          </div>

        </form>

        {this.state.redirect && (<Redirect to={`/users/${userId}/contacts`}/>)}
      </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>      
            <br/>
            </div>
    );
  }
  
}

export default NewContact;