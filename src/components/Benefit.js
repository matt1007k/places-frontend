import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import {redA400,lightBlueA400,amberA400} from 'material-ui/styles/colors';

export default class Benefit extends React.Component{
    render(){
        return(
            <ul>
                <Card className="header-benefit">
                    <CardText >
                        <div className="row">
                            <div className="header-benefit-image" style={{'backgroundColor':redA400}}>
                                <img src={process.env.PUBLIC_URL + '/images/heart.png'} height="100" alt="Calificaciones con emociones"/>
                            </div>
                            <div className="header-benefit-content">
                                <h3>Calificaciones con emociones</h3>
                                <p>Califica tus lugares con experiencias, no con números</p>
                            </div>
                        </div>
                    </CardText>
                </Card>
                <Card className="header-benefit">
                    <CardText >
                        <div className="row">
                            <div className="header-benefit-image" style={{'backgroundColor':lightBlueA400}}>
                                <img src={process.env.PUBLIC_URL + '/images/error-wifi.png'} height="100" alt="Calificaciones con emociones"/>
                            </div>
                            <div className="header-benefit-content">
                                <h3>¿Sin internet? Sin problemas</h3>
                                <p>Places funciona sin internet o en conexiones lentas.</p>
                            </div>
                        </div>
                    </CardText>
                </Card>
                <Card className="header-benefit">
                    <CardText>
                        <div className="row">
                            <div className="header-benefit-image" style={{'backgroundColor':amberA400}}>
                                <img src={process.env.PUBLIC_URL + '/images/star.png'}  alt="Calificaciones con emociones"/>
                            </div>
                            <div className="header-benefit-content">
                                <h3>Tus lugares favoritos</h3>
                                <p>Define tu lista de sitios favoritos.</p>
                            </div>
                        </div>
                    </CardText>
                </Card>
            </ul>
        );
    }
}