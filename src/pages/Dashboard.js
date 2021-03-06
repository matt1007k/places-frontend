import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from '../components/Container';
import PlaceHorizontal from '../components/places/PlaceHorizontal';

import {getPlaces} from '../requests/places';
import * as actions from '../actions/placesActions';

class Dashboard extends React.Component {  

  constructor(props) {
    super(props);

    this.state = {
    	places: []
    }
    this.loadLugares();
  }
	loadLugares(){
		//Cargamos las Lugares usando Thunk con redux 
    this.props.dispatch(actions.loadAll());		
	}

  places(){
  	return this.props.places.map((place, index) =>{
  		return <PlaceHorizontal place={place} key={index}/>
  	})
  }

  render() {
    return (
     	<div>
     		<Link to="/new"> 
     			<FloatingActionButton
     			className="FAB" 
     			secondary={true}>
     				<ContentAdd />
     			</FloatingActionButton>	
     		</Link>
     		<Container>
		     	<div className="row">
		     		<div className="col-xs-12 col-md-2" style={{'textAlign':'left'}}>
		     			<FlatButton label="Explorar"/>
		     			<FlatButton label="Favoritos"/>
		     			<FlatButton label="Visitas Previas"/>
		     		</div>
		     		<div className="col-xs-12 col-md-10">
		     			{this.places()}
		     		</div>
		     	</div>
		     </Container>
     	</div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return{
    places: state.places
  }
}
export default connect(mapStateToProps)(Dashboard);