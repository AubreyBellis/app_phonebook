import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

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
            <div>
        <form onSubmit={this._newUser}>
            <div>
                <label htmlFor="first_name">First Name: </label>
                <input onChange={this._handleChange} type="text" name="first_name" value={this.state.first_name} />
            </div>
            <div>
                <label htmlFor="last_name">Last Name: </label>
                <input onChange={this._handleChange} type="text" name="last_name" value={this.state.last_name} />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
            </div>
            
            <button>Create New User</button>
        </form>
            </div>
        );
    }
}

export default NewUser;
