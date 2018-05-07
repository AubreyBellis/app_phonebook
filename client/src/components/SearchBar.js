import React, { Component } from 'react';
import axios from 'axios'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from 'react-search-box';

class SearchBar extends Component {
    constructor() {
        super();
    
        this.state = {
          users: [],
          loading: false
        };
      }
    
      componentDidMount() {
        this.setState({
            user: [],
          loading: true
        });
    
        fetch('http://localhost:3000/api/users')
        .then(res => res.json())
        .then(data => {
            let users = this.state.users.map((user) => {
                <div key={user.id} user={user}/>
            })
          this.setState({
            users: users,
            loading: false
          });
        })
      }
    
      handleChange(value) {
        console.log(value);
      }
    
      render() {
        if (this.state.loading) {
          return (
            <div className="app__loading">Loading...</div>
          );
        }
    
        return (
                <div className="search__component">
                  <Search
                    user={ this.state.users }
                    onChange={ this.handleChange.bind(this) }
                    placeholder="Search..."
                    class="search-class"
                    searchKey="full_name"
                  />
                </div>
            );
        }

    }
         
  
    

export default SearchBar;