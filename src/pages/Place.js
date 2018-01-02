import React from 'react';
import { connect } from 'react-redux';

import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {withRouter} from 'react-router-dom';

import {getPlace} from '../requests/places';

import Container from '../components/Container';
import VisitForm from '../visits/VisitForm';
import * as actions from '../actions/visitsActions'; 

import VisitsCollection from '../components/visits/VisitsCollection';

class Place extends React.Component { 

  constructor(props) {
    super(props);

    const slug = props.match.params.slug;
    this.loadPlace(slug);

    this.state = {
    	place: {}
		};
		
		
  }

  loadPlace(slug){
		this.props.dispatch(actions.getAllPlace(slug));
  	getPlace(slug).then((plc) => {
		this.setState({
			place: plc
		});
		}).catch(console.log);
	}
	

  render() {
  	const {place} = this.state;
    return (
      <div className="Place-container">        
      	<header className="Place-cover" 
      			style={{'backgroundImage':'url('+place.coverImage+')'}}>      			
      	</header>
      	<Container>
      		<div className="row">
      			<div className="col-xs-12 col-md-8">
      				<Card className="Place-card">      					
      					<div className="row">
      						<div className="col-xs-12 col-sm-3 col-lg-2">
      							<img src={place.avatarImage} style={{'maxWidth': '100%'}} alt=""/>
      						</div>
      						<div className="col-xs">
      							<h1>{place.title} </h1>
      							<address> {place.address} </address>
      							<p> {place.description} </p>
      						</div>
      					</div>
								<div  style={{'marginTop':'1em'}} >
									<VisitForm place={place} />
								</div>	

      				</Card>
      			</div>
						<div className="col-xs">
							<VisitsCollection visits={this.props.visits}/>
						</div>
      		</div>
      	</Container>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
	return{
			 visits: state.visits    
	};
}

export default connect(mapStateToProps)(Place);