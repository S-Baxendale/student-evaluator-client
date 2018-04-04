import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import LoginPage from './components/LoginPage'
import BatchList from './components/BatchList'
import StudentList from './components/StudentList'
import StudentInfo from './components/StudentInfo'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Student Evaluator</h1>
          <Route exact path="/login" component={ LoginPage } />
          <Route exact path="/batches" component={ BatchList } />
          <Route exact path="/batches/:id" component={ StudentList } />
          <Route exact path="/students/:id" component={ StudentInfo } />
          <Route exact path="/" render={ () => <Redirect to="/batches" /> } />
        </div>
      </Router>
    );
  }
}

export default App;
