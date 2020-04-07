import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import '../screens/Controle.css';
import Controle from '../screens/Controle.js';


class CINEBOUT extends Component {

  state = {
    nom: '',
    type: 'CINE',
    showParcours: '',
    showMenu: true
  };

  constructor(props){
    super(props);
    this.goParcours = this.goParcours.bind(this);
    this.goMenu = this.goMenu.bind(this);
  

  }

  goParcours(){
    this.setState({showParcours: true})
    this.setState({showMenu : false})
    this.setState({type: event.target.value})
    switch (event.target.value)
    {
      case 'C' : 
      this.setState({nom: "CONTRÔLE"})
      break;
      case 'I' : 
      this.setState({nom: "IMPRÉSIVIBILITÉ"})
      break;
      case 'N' : 
      this.setState({nom: "NOUVEAUTÉ"})
      break;
      case 'E' : 
      this.setState({nom: "ÉGO MENACÉ"})
      break;
 
    }
    
  }

  goMenu(){
    this.setState({showParcours: false})
    this.setState({showMenu : true})
  }

  render() {
    return <div> 
      { this.state.showParcours ? <Controle type={this.state.type} nom={this.state.nom}/> : null }

          <Button size = "lg" variant = "info" className="bar" onClick= {this.goMenu} block> Menu CINE </Button>
        
          { this.state.showMenu ?  <div className="Camembert"> 
            
          
            <Button size = "lg" variant = "secondary" value= "C" onClick={this.goParcours} block> CONTROLE</Button>
            <Button size= "lg" variant = "warning" value = "I" onClick={this.goParcours} block>IMPREVISIBILITE</Button> 
   
   
            <Button size= "lg" variant = "info" value="N" onClick={this.goParcours} block>NOUVEAUTE</Button>
            <Button size= "lg" variant = "dark" value= "E" onClick={this.goParcours} block >EGO MENACE</Button>
           
            </div>   : null } 

      </div>
    
  }
}

export default CINEBOUT;