import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './components/navigation/Navigation';
import './App.css';

import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import { withRouter } from 'react-router-dom';

class App extends Component {
   
   constructor(props){
     super(props);

   }
   
   render(){
     return(
         <MuiThemeProvider>
             <Navigation/>
             <TransitionGroup>
               <CSSTransition classNames="left-out" timeout={300} 
               key={this.props.location.pathname.split('/')[1]}>
                  {this.props.children}
               </CSSTransition>
             </TransitionGroup> 
             
         </MuiThemeProvider>
     );
   }
}

export default withRouter(App);
