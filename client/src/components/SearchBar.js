import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
          loading: true
        });
    
        fetch('http://localhost:3000/api/users')
        .then(res => res.json())
        .then(user => {
          this.setState({
            user: user.props,
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
                    user={ this.state.user }
                    onChange={ this.handleChange.bind(this) }
                    placeholder="Search..."
                    class="search-class"
                    searchKey="first_name"
                  />
                </div>
            );
        }
    }
    

export default SearchBar;