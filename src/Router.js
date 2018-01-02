import React, { Component } from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Place from './pages/Place';
import App from './App';
import Dashboard from './pages/Dashboard';
import NewPlace from './pages/places/NewPlace';

import {
    BrowserRouter as ReactRouter,
    Route,
    Switch
} from 'react-router-dom';

import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';

const userSignedIn = false;

class Router extends Component{    

    signedInRoutes(){
        if (this.props.user.jwt) {
            return(
                <Route path="/new" component={NewPlace} ></Route>
            );
        }else{
            return( <p>No tienes autotización para entrar aquí.....!</p>);
        }
    }
    home(){
        if (this.props.user.jwt) return Dashboard;

        return Home;
    }

    render(){
        return(
            <ConnectedRouter history={this.props.history}>
                <App>
                    <Switch>
                        <Route exact path="/" component={this.home()}></Route>
                        <Route path="/login" component={Login}></Route>
                         <Route path="/lugares/:slug" component={Place}></Route>
                        <Route path="/signup" component={Signup}></Route>
                        {this.signedInRoutes()}
                    </Switch>
                </App>
            </ConnectedRouter>
        )
    }
}

function mapStateToProps(state,ownProps) {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Router);