import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const FormStyles = styled.div`
padding: 30px;
margin: 20px;
font-family: 'Oswald', sans-serif;
font-family: 'Special Elite', cursive;
font-size: 18px;
font-weight: bold;
text-align: center;
input {
    width: 225px;;
    height: 25px;
}
button {
border-radius: 3px;
padding: 0.25em 1em;
margin: 0 1em;
background: #993300;
color: white;
border: 2px solid #941a18;
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
}
`;

class EditUser extends Component {
    constructor() {
        super();
        this.state = {
            user: {
            first_name: '',
            last_name: '',
            email: '',
            redirect: false
            }
        }
    }

    componentWillMount() {
        this._fetchUser()
    }
    
    _fetchUser = async () => {
        const id = this.props.match.params.id
        try {
            const res = await axios.get(`/api/users/${id}`);
            await this.setState({user: res.data.user});
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.user}
        newState[e.target.name] = e.target.value
        this.setState({user: newState})
    }

    _editUser = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id
        const payload = this.state.user
        try {
            const res = axios.patch(`/api/users/${id}`, payload)
            this.setState({redirect: true})
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        if (this.state.redirect){
            return <Redirect to="/users" />
       }
            return (
                <div>
                <FormStyles>
                <form onSubmit={this._editUser}>
                <div class="col-md-3 col-lg-3"></div>
                <div class="col-xs-12 col-md-6 col-lg-6">
                    <div class="col-xs-12 form-group">
                        <div class="col-xs-6 col-sm-6 ">
                            <label htmlFor="first_name">First Name: </label>
                        </div>
                        <div class="col-xs-6 col-sm-6">
                            <input onChange={this._handleChange} type="text" name="first_name" value={this.state.user.first_name} />
                        </div>
                    </div>
                    <div class="col-xs-12 form-group">
                        <div class="col-xs-6 col-sm-6">
                            <label htmlFor="last_name">Last Name: </label>
                        </div>
                        <div class="col-xs-6 col-sm-6">
                            <input onChange={this._handleChange} type="text" name="last_name" value={this.state.user.last_name} />
                        </div>
                    </div>
                    <div class="col-xs-12 form-group">
                        <div class="col-xs-6">
                            <label htmlFor="email">Email: </label>
                        </div>
                        <div class="col-xs-6">
                            <input onChange={this._handleChange} type="text" name="email" value={this.state.user.email} />
                        </div>
                    </div>
                    <div class="col-xs-12 form-group centered">
                        <button>Update User</button>
                    </div>
                    </div>
                    <div class="col-xs-1 col-md-3 col-lg-3"></div>
                </form>
                </FormStyles>
                <br />
            </div>
        );
    }
}

export default EditUser;