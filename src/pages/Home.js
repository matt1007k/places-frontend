import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {indigo400} from 'material-ui/styles/colors';

import PlaceCard from '../components/places/PlaceCard';
import Title from '../components/Title';
import Benefit from '../components/Benefit';
import {Link} from 'react-router-dom';

import data from '../requests/places';
import {getPlaces} from '../requests/places';

import TransitionGroup from 'react-transition-group/TransitionGroup';
//import CSSTransition from 'react-transition-group/CSSTransition';

import Container from '../components/Container';

// conexion de React a redux
import { connect } from 'react-redux';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            places: []
        };

        

        setTimeout(() => this.setState({places: data.places}),2000);
        this.hidePlace = this.hidePlace.bind(this);

    }
    loadPlaces(){
        getPlaces().then((plc) => {
            const places = plc.data.docs;
              
        }).catch(console.log);
    }

    places(){
        return this.state.places.map((place,index) =>{
            return(
                <PlaceCard place={place} key={index} onRemove={this.hidePlace} />
            );
        });
    }
    hidePlace(place){
        this.setState({
            places: this.state.places.filter(el => el !== place)
        })
    }
    render(){
        return(
            <section>
                <div className="header-background">
                    <Container>
                        <div className="header-main">
                            <Title/>
                            <Link to="/signup">
                                <RaisedButton label="Crear cuenta gratuita" secondary={true}/>
                            </Link>
                            <img className="header-illustration" src={process.env.PUBLIC_URL + '/images/top-background.png'} alt=""/>
                        </div>
                        <div>
                           <Benefit/>
                        </div>
                    </Container>
                </div>
                <div style={{'backgroundColor': indigo400,'padding':'50px','color':'white'}}>
                    <h3 style={{'fontSize':'2em'}} >Sitios Populares</h3>
                    <TransitionGroup className="row">
                        {this.places()}
                    </TransitionGroup>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state,ownProps){
    return{
        places: state.places
    }
}

export default connect(mapStateToProps)(Home);