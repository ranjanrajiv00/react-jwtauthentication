import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ProtectedRoute } from '../Shared/ProtectedRoute';
import Artifactory from '../Artifactory/Artifactory';
import { accountService } from '../Login/Account.Services';
import Login from '../Login/Login';
const Dashboard = () => <h2>Dashboard</h2>;

export default class AdminLayout extends Component {
    constructor(props) {
        super(props);
    }
    logout = () => {
        accountService.logout();
        this.props.history.push('/')
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
                                <li className="nav-item"><Link to='/admin/dashboard' className="nav-link">Dashboard</Link></li>
                                <li className="nav-item"><Link to='/admin/artifactory' className="nav-link">Artifactory</Link></li>
                            </ul>
                            <ul className="navbar-nav navbar-right">
                                <li className="nav-item"><a href='#' className="nav-link" onClick={() => { this.logout() }}>Logout</a></li>
                            </ul>
                        </nav>
                        <div>
                            <Route path="/" exact component={Login} />
                            <ProtectedRoute path="/admin/dashboard" exact component={Dashboard} />
                            <ProtectedRoute path="/admin/artifactory" component={Artifactory} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}