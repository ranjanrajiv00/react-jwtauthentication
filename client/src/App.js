import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login/Login';
import AdminLayout from './Admin/AdminLayout';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <div className="col-sm-12">
            <div>
              <Route path="/" exact component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/admin" component={AdminLayout} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
