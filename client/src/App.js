import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login/Login';
import Artifactory from './Artifactory/Artifactory';
import { ProtectedRoute } from './Shared/ProtectedRoute';
import { accountService } from './Login/Account.Services';

import './App.css';

const Dashboard = () => <h2>Dashboard</h2>;

class App extends Component {
  constructor(props) {
    super(props);
  }
  logout = () => {
    accountService.logout();
  }
  render() {
    return (
      <Router>
        <div className="container">
          <div className="col-sm-12">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">App</a>
                </div>
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item"><Link to='/dashboard' className="nav-link">Dashboard</Link></li>
                  <li className="nav-item"><Link to='/artifactory' className="nav-link">Artifactory</Link></li>
                </ul>
                <ul className="navbar-nav navbar-right">
                  <li className="nav-item"><a href='/' className="nav-link" onClick={()=>{this.logout() }}>Logout</a></li>
                </ul>
              </nav>
            <div>
              <Route path="/" exact component={Login} />
              <Route path="/login" component={Login} />
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <ProtectedRoute path="/artifactory" component={Artifactory} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
