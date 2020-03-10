import React, { Component } from 'react' ;

import ReponseBox from '../components/ReponseBox.js';

class ChatApp extends Component {

    constructor (props){

        super(props);
    
        this.state = { ReponseBox:[]};
        
    }

    handleSend(name, text) {
        this.setState({
          ReponseBox: this.ReponseBox.chat.concat( `${name}: ${text}` )
        });
    }


    render() {

        return (
          < div className= "Fenêtre de Chat" >
         
          
          < h1 className= "App-title" > Fenêtre de Discussion </ h1 >
    
          < ReponseBox onSend= {this.handleSend} name= "ReponseBox1" display={this.state.ReponseBox} />
          
          </ div >
        );
      }


}


export default ChatApp;