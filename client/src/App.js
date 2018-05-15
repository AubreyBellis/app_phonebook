import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import AllUsers from "./components/AllUsers";
import EditUser from './components/EditUser';
import SingleUser from "./components/SingleUser";
import SplashPage from './components/SplashPage'
import NewUser from './components/NewUser';
import ContactList from './components/ContactList';
import Contact from './components/Contact';
import GlobalNav from './components/GlobalNav';




class App extends Component {
  // componentWillMount(){
  //   setAxiosDefaults();
  // }
  render() {
    return (
      <Router>
        <div>
        <GlobalNav />
       
          <Route exact path='/' component={SplashPage} />
          <Route exact path="/users" component={AllUsers}/>
          <Route exact path="/user/:id" component={SingleUser}/>
          <Route exact path='/users/new' component={NewUser} />
          <Route exact path="/users/:id/contacts" component={ContactList}/>
          <Route exact path='/users/:id/edit' component={EditUser} />
          <Route exact path="/users/:id/contacts/:id" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;