// Components/Search.js

import React, { Component } from 'react';

class ReponseBox extends React.Component {


  constructor (props) {
    super (props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
    }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

handleSend(event) {
    this.props.onSend(this.props.name,this.state.ReponseBox);
    this.setState({
    ReponseBox: ''
    });
}
  
  displayChat() {
    let ReponseBox = this.props.display.map((item) => {
      return (<p>{item}</p>);
    });
      return (<div class="display">{ReponseBox}</div>);
  }
  
  
  
  render() {
    return (
        < div >
        {this.displayChat()}
        < div >
        < input type= "text" name= "ReponseBox" onChange= {this.handleChange}
        value= {this.props.ReponseBox} />
        < button onClick= {this.handleSend} > Envoyer </ button >
        </ div >
        </ div >
    );
    }
}

export default ReponseBox