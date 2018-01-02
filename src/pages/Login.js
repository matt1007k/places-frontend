import React from 'react';
import Title from '../components/Title';
import Container from '../components/Container';

import TextField from 'material-ui/TextField';
import RaisedButton from'material-ui/RaisedButton';

import {
    Link
} from 'react-router-dom';

import {login} from '../requests/auth';

import { connect } from 'react-redux';

import * as actions from '../actions/userActions';

import { push } from 'react-router-redux';


class Login extends React.Component{
    constructor(props){
        super(props);        

        
        this.requestAuth = this.requestAuth.bind(this);
    }


    requestAuth(){
        const credencials = {
            email: this.refs.emailField.getValue(),
            password: this.refs.passwordField.getValue(),
        }
       
        login(credencials).then(data => {
                //actualizamos el estado de la accion login 
                this.props.dispatch(actions.login(data.jwt));
                this.props.dispatch(actions.loadUser(data.user));
                this.props.dispatch(push('/'));
            }
        ).catch(console.log)
    }
    render(){
        return(
            <div className="row middle-xs" style={{'marginRight':'0'}}>
                <div className="col-xs-12 col-sm-6">
                    <Container>
                        <div style={{'textAlign':'left'}}>
                            <Title/>                            
                            <TextField
                                floatingLabelText="Correo Electrónico"
                                type="email"
                                className="textfield"
                                required
                                validations="isEmail"
                                ref="emailField"
                                validationError="Asegurate de introducir tu correo electronico válido"
                            />
                            <TextField
                                floatingLabelText="Contraseña"
                                type="password"
                                className="textfield"
                                required
                                ref="passwordField"
                            />
                        </div>
                    </Container>
                    <div className="Login-actions">
                        <Link to="/signup" style={{marginRight:'1em'}}>Crear nueva cuenta</Link>
                        <RaisedButton onClick={this.requestAuth}
                            label="Ingresar"
                            secondary={true}
                        />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6" >
                    <div className="Login-background"
                         style={{'backgroundImage':
                         "url("+ process.env.PUBLIC_URL + '/images/login-background.jpeg' +")"}}></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state,ownProps){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login);