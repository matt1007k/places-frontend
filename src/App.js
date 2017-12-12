import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './pages/Home';
import Login from './pages/Login';

import './App.css';

import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            numero: 0
        };
    }

    render(){
        return(
            <MuiThemeProvider>
                <Router>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/" style={{marginRight:'2em'}}>Home</Link>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/login" component={Login}></Route>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
