import React from 'react';
import { connect } from 'react-redux';


import FlatButton from 'material-ui/FlatButton';

import VisitModal from './VisitModal';
import * as actions from '../actions/visitsActions'; 


class VisitForm extends React.Component{

   constructor(props){
      super(props);

      this.openVisitsModal = this.openVisitsModal.bind(this);
      this.add = this.add.bind(this);
      
   }
   
   openVisitsModal(){		
		this.refs.modalRef.openModal();
   }
   
   add(observation, reaction = "love"){
      this.props.dispatch(actions.addVisit(this.props.place,observation, reaction));    
   }

   render(){
      return(
         <div>
            <VisitModal place={this.props.place} visits={this.getVisit} ref="modalRef" onSubmit={this.add} />
            <FlatButton  
               onClick={this.openVisitsModal}
               label="Valorar el negocio" 
               secondary={true}  />
         </div> 
      );
   }
}


export default connect()(VisitForm);