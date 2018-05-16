import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ContactList from './ContactList'

const SingleUserStyles = styled.div`


  h1{
    font-family: 'Open Sans', sans-serif;
    font-family: 'Nixie One', cursive;
    margin-top: 20px;
  }

  .contactHeader{
    margin-top: 30px;
    margin-bottom: 10px;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Nixie One', cursive;
    font-style: italic;
    text-decoration: underline;
   
  }
  h1, h2 {
    font-weight: bold;
    font-size: 4vw;
  }
  h3 {
    margin-top: 20px;
    font-size: 3vw;
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

          <div class="col-xs-12">
            <div class="userFirstName col-xs-8">
              <h1>Hello {this.state.user.first_name}!</h1>
            </div>
            <div class="col-xs-2">
              <button type="button" class="close" aria-label="Close" style={{'font-size': '25px', 'color': 'red'}} onClick={this._deleteUser}>
                <h2>
                  <span  aria-hidden="true">&times;</span>
                </h2>
              </button>
            
                {/* <button onClick={this._deleteUser}>X</button> */}
            </div>
            <div class="col-xs-2">
              <h3>
                <Link to={`/users/${this.props.match.params.id}/edit`}><span class="glyphicon glyphicon-user"></span></Link>
              </h3>
            </div>
          </div>
          
           
          <div class="col-xs-12 contactHeader">
            <h4>List of Contacts</h4>
          </div>
          <div class="col-xs-12" style={{'text-align': 'center;'}}>
            <ContactList contacts={this.state.contacts} userId={this.props.match.params.id}/>
          </div>
           

       </SingleUserStyles>
      </div>
        }
    </div>
     )
  }
}

export default SingleUser