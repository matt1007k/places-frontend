import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
//import radio from 'material-ui/svg-icons/avg/radio';

export default class Uploader extends React.Component{
   constructor(props){
      super(props);

      this.state = {
         file: { name: '' }
      }
      this.openInput = this.openInput.bind(this);
      this.handleFile = this.handleFile.bind(this);
   }
   openInput(){
      this.refs.file.click();
   }
   handleFile(ev){
      let file = ev.target.files[0];
      if(!file) return;

      this.setState({
         file: file
      })
      //enviamos el archivo a componente Padre
      this.props.getFile(this.props.type, file);
   }

   render(){
      return(
         <div>
            <input 
            type="file" 
            ref="file" 
            onChange={this.handleFile}
            style={{'display':'none'}} />
            <span style={{'marginRight':'0.5em'}} > {this.state.file.name} </span>
            <RaisedButton label={this.props.label} onClick={this.openInput} primary={true}/>
         </div>      
      );
   }
}