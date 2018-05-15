import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const FormStyles = styled.div`
margin-top: 20px;
margin-left: -10px;
font-family: 'Libre Baskerville', serif;
input {
    width: 100%;
}
button {
border-radius: 3px;
padding: 0.4em 3em;
margin: 0 1em;
background: black;
color: white;
border: 2px solid #f4d4df;
font-size: 1em;
align-content: center;
}
input[type=submit] {
    background-color: black;
    border-color: black;
    color: white;
    font-weight: bold;
    padding: 5px;
    font-size: 15px;
    margin: 10px;
    height: 30px;
    outline-style: double;
}
`;

class NewUser extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            redirect: false
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    _newUser = async (e) => {
        e.preventDefault();
        const payload = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email
        }
        const res = await axios.post('/api/users', payload);
        this.setState({
                    first_name: res.data.first_name,
                    last_name: res.data.last_name,
                    email: res.data.email, 
                    redirect: true
                }) 
                console.log(res.data);
    }

    render() {
    if (this.state.redirect){
        return <Redirect to="/users" />
   }
        return (

                <FormStyles>
                
                <form onSubmit={this._newUser}>
                    
                    <div class="col-xs-12 col-md-8 col-lg-8">
                        <div class="col-xs-12 form-group">
                            <div class="col-xs-6 col-sm-6 ">
                                <label htmlFor="first_name">First Name: </label>
                            </div>
                        <div class="col-xs-6 col-sm-6">
                            <input onChange={this._handleChange} type="text" name="first_name" value={this.state.first_name} />
                        </div>
                    </div>
                    <div class="col-xs-12 form-group">
                        <div class="col-xs-6 col-sm-6">
                            <label htmlFor="last_name">Last Name: </label>
                        </div>
                        <div class="col-xs-6 col-sm-6">
                            <input onChange={this._handleChange} type="text" name="last_name" value={this.state.last_name} />
                        </div>
                    </div>
                    <div class="col-xs-12 form-group">
                        <div class="col-xs-6">
                            <label htmlFor="email">Email: </label>
                        </div>
                        <div class="col-xs-6">
                            <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
                        </div>
                    </div>
                        <div class="col-xs-12 form-group centered">
                            <button>Create New User</button>
                        </div>
                    </div>
                    
                </form>
              
                </FormStyles>
        
        );
    }
}

export default NewUser;
