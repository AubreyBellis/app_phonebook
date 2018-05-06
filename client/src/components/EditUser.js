import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


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
                <form onSubmit={this._editUser}>
                    <div>
                        <label htmlFor="first_name">First Name: </label>
                        <input onChange={this._handleChange} type="text" name="first_name" value={this.state.user.first_name} />
                    </div>
                    <div>
                        <label htmlFor="last_name">Last Name: </label>
                        <input onChange={this._handleChange} type="text" name="last_name" value={this.state.user.last_name} />
                    </div>
                    {/* <div>
                        <label htmlFor="image">image: </label>
                        <input onChange={this._handleChange} type="text" name="image" value={this.state.teacher.image} />
                    </div> */}
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input onChange={this._handleChange} type="text" name="email" value={this.state.user.email} />
                    </div>
                    <button>Submit</button>
                </form>
                <br />
            </div>
        );
    }
}

export default EditUser;