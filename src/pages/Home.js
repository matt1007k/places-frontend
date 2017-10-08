import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {indigo400} from 'material-ui/styles/colors';

import PlaceCard from '../components/places/PlaceCard';
import Title from '../components/Title';
import Benefit from '../components/Benefit';
import data from '../requests/places';

import TransitionGroup from 'react-transition-group/TransitionGroup';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            places: []
        };
        setTimeout(()=> this.setState({places: data.places}),2000);
        this.hidePlace = this.hidePlace.bind(this);

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
                    <div>
                        <div className="header-main">
                            <Title/>
                            <RaisedButton label="Crear cuenta gratuita" secondary={true}/>
                            <img className="header-illustration" src={process.env.PUBLIC_URL + '/images/top-background.png'} alt=""/>
                        </div>
                        <div>
                           <Benefit/>
                        </div>
                    </div>
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