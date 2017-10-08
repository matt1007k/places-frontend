import React from 'react';

import {Card, CardText,CardTitle,CardMedia,CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import CSSTransition from 'react-transition-group/CSSTransition';


export default class PlaceCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: true
        }

    }
    render(){
        return(
        <CSSTransition
            classNames='fade-scale'
            in={this.props.in}
            >
            <div className="col-xs-12 col-md-4" >
                <Card>
                    <CardMedia>
                        <img src={process.env.PUBLIC_URL + this.props.place.imageUrl} alt={this.props.place.title}/>
                    </CardMedia>
                    <CardTitle title={this.props.place.title}/>
                    <CardText>{ this.props.place.description }</CardText>
                    <CardActions style={{'textAlign':'right'}}>
                        <FlatButton secondary={true} label="Ver más"/>
                        <FlatButton secondary={true} onClick={() => this.props.onRemove(this.props.place)} label="Ocultar"/>
                    </CardActions>
                </Card>
            </div>
        </CSSTransition>
        );
    }
}