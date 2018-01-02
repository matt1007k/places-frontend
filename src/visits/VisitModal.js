import React from 'react';

import Modal from 'react-modal';
import Container from '../components/Container';
import Title from '../components/Title';
import EmojiPicker from '../components/visits/emoji_picker/EmojiPicker';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import { yellow700 } from 'material-ui/styles/colors';


export default class VisitModal extends React.Component {
  constructor(props) {
		super(props);
		
		this.state = {
			open: false,
			reaction: ''
		}

		this.closeModal = this.closeModal.bind(this);
		this.submit = this.submit.bind(this);
		this.emojiSelected = this.emojiSelected.bind(this);

		//console.log(this.props.visits);
	}

	openModal(){
		this.setState({open:true})
	}

	closeModal(){
		this.setState({open:false})
	}

	submit(){
		const observation = this.refs.observationField.getValue();
		this.props.onSubmit(observation, this.state.reaction);

		this.closeModal();
	}

	emojiSelected(reaction){
		console.log(reaction);
		this.setState({reaction})
	}
  render() {
    return (
      <div>
      	<Modal
      	isOpen={this.state.open}
      	>
      		<Container>
      			<div style={{'textAlign':'left', 'marginTop': '2em'}}>
      				<header>
      					<Title/>
      					<h1>Cuéntanos de tu visita a 
      						<span style={{'backgroundColor': yellow700,'margin': '0 0.3em'}} >
      							{this.props.place.title}
      						</span>  
      					</h1>
      				</header> 
      				<div className="row">
      					<div className="col-xs-4 col-sm-2 col-lg-1">
							 <EmojiPicker onSelect={this.emojiSelected} />
      					</div>
      					<div className="col-xs">
      						<TextField 
      							floatingLabelText="Cuéntanos que te pareció este lugar"
      							ref="observationField"
      							multiLine={true}
      							style={{'width':'100%'}}
      						 />
      						 <div style={{'marginTop':'1em'}}>
										<RaisedButton label="Guardar" secondary={true} 
											onClick={this.submit} />
										<FlatButton  
											onClick={this.closeModal}
											label="Cancelar" 
											style={{'marginLeft':'2em'}}
											/>
      						 </div>
      					</div>
      				</div>
      			</div>
      		</Container>
      	</Modal>
      </div>
    );
  }
}


