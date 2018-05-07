import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ContactList from './ContactList'

const SingleUserStyles = styled.div`
  font-family: 'Oswald', sans-serif;
  font-family: 'Special Elite', cursive;
  img {
    max-height: 400px;
    width: 100%;
  }
  h1{
    font-size:;
    margin-top: 20px;
  }
  .contactHeader{
    margin-top: 30px;
    text-align: center;
  }
`;

class SingleUser extends Component{
  constructor(){
    super();
    this.state = {
      user: {},
      contacts: []
    }
}

  componentWillMount(){
    this._fetchUserAndContacts();
  }

  _fetchUserAndContacts = async () => {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/users/${id}`)
    this.setState({
      user: res.data.user,
      contacts: res.data.contacts
    })
  }
  _deleteUser = async (e) => {
    e.preventDefault();
    try {
        const id = this.props.match.params.id;
        const res = await axios.delete(`/api/users/${id}`)
        this.setState({redirect: true})
        return res.data
        

    } catch(err) {
        console.log(err)
    }
}


  render(){
    return (

        <div>
        {this.state.redirect 
        ? 
            <Redirect to={'/users'} />
        :


         <div>
      <SingleUserStyles>
        <div class="col-md-1"></div>
          <div class="col-xs-12 col-md-11">
            <div class="userFirstName col-xs-8">
              <h1>Hello {this.state.user.first_name}</h1>
            </div>
              <div class="col-xs-2" style={{'margin-top': '25px'}}>
              <button type="button" class="close" aria-label="Close" onClick={this._deleteUser}>
                <span style={{'font-size': '25px'}} aria-hidden="true">&times;</span>
              </button>
                {/* <button onClick={this._deleteUser}>X</button> */}
              </div>
              <div class="col-xs-2" style={{'margin-top': '26px'}}>
                <Link to={`/users/${this.props.match.params.id}/edit`}><span class="glyphicon glyphicon-user"></span></Link>
              </div>
          </div>
              <div>
                <div class="col-xs-12 contactHeader">
                  <h2>:Contacts:</h2>
                </div>
                <div class="col-xs-12" style={{'text-align': 'center'}}>
                  <ContactList contacts={this.state.contacts} userId={this.props.match.params.id}/>
                  </div>
              </div>
       </SingleUserStyles>
      </div>
        }
    </div>
     )
  }
}

export default SingleUser