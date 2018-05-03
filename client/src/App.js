// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import AllTeachers from "./components/AllTeachers";
// import EditTeacher from './components/EditTeacher';
// import Teacher from "./components/Teacher";
import SplashPage from './components/SplashPage'
import GlobalNav from './components/GlobalNav';
// import NewTeacher from './components/NewTeacher';
// import ClassroomList from './components/ClassroomList';
// import Classroom from './components/Classroom';
// import EditClassroom from './components/EditClassroom';
// // import { setAxiosDefaults } from './util';
// import Student from './components/Student';

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
          {/* <Route exact path="/teachers" component={AllTeachers}/>
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