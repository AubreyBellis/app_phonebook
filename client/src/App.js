import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
// import EditTeacher from './components/EditTeacher';
import SingleUser from "./components/SingleUser";
import SplashPage from './components/SplashPage'
// import NewTeacher from './components/NewTeacher';
import ContactList from './components/ContactList';
// import Classroom from './components/Classroom';
// import EditClassroom from './components/EditClassroom';
// // import { setAxiosDefaults } from './util';
import Contact from './components/Contact';

class App extends Component {
  // componentWillMount(){
  //   setAxiosDefaults();
  // }
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={SplashPage} />
          <Route exact path="/users" component={ProfilePage}/>
          <Route exact path="/user/:id" component={SingleUser}/>
          <Route exact path="/users/:id/contacts/:id" component={Contact}/>
          <Route exact path="/users/:id/contacts" component={ContactList}/>
          {/*}
          <Route exact path='/teachers/:id/edit' component={EditTeacher} />
          <Route exact path='/teachers/new' component={NewTeacher} />
        <Route exact path="/teacher/:id" component={Teacher}/>
        <Route exact path="/classrooms/:id" component={Classroom}/>
        <Route exact path="/classrooms" component={ClassroomList}/>
        <Route exact path='/classrooms/:id/edit' component={EditClassroom} />
        <Route exact path="/classrooms/:id/students/:id" component={Student}/> */}
       </div>
      </Router>
    );
  }
}

export default App;