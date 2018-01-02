import React from 'react';
import { connect } from 'react-redux';

import MyNavBar from './MyNavBar';
import { push } from 'react-router-redux';

import { logout } from '../../actions/userActions';


function mapStateToProps(state, ownProps) {
  return {
  		user: state.user
  };
}

export class Navigation extends React.Component {  

  constructor(props) {  	
    super(props);
    this.goHome = this.goHome.bind(this);
    this.logout = this.logout.bind(this);
  }
  goHome(){
  	this.props.dispatch(push('/'));
  }

  logout(){
  	this.props.dispatch(logout());
  	this.props.dispatch(push('/'));
  }

  render() {
    return (
      <MyNavBar  goHome={this.goHome}  user={this.props.user} logout={this.logout}/>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Navigation)
