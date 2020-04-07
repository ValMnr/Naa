import React, { Component } from 'react';
import middle from './images/middle.png';
import bad from './images/bad.png';
import middle_bad from './images/middle_bad.png';
import happy from './images/naa.png';


import vingt from './images/20.png';
import quatre from './images/40.png';
import six from './images/60.png';
import huit from './images/80.png';
import cent from './images/100.png';
import './Controle.css';


class Resultat extends Component {

    constructor(props) {
        super(props)
       
    }

    renderSwitch() {
        if (this.props.resultat == 0) {
            return bad;    
        }
        else if (this.props.resultat == 1) {
            return bad;
        }
        else if (this.props.resultat == 2) {
            return middle_bad;
        }
        else if (this.props.resultat == 3) {
            return middle;
        }
        else if (this.props.resultat == 4) {
           return happy;
        }
        else if (this.props.resultat == 5) {
            
          return happy;
        }
    }

    renderContent(){
        if (this.props.resultat == 0) {
            return "Aïe, ce n'est pas terrible, retente ta chance plus tard...";    
        }
        else if (this.props.resultat == 1) {
            return "Vous ferez mieux la prochaine fois, il faut s'exercer!";
        }
        else if (this.props.resultat == 2) {
            return "C'est pas trop ca... On s'y met!";
        }
        else if (this.props.resultat == 3) {
            return " Vous ferez mieux la prochaine fois. Continuez!";
        }
        else if (this.props.resultat == 4) {
           return "C'est presque ça. Vous y êtes presque!";
        }
        else if (this.props.resultat == 5) {
          return "Bravo!! Le stress n'a plus de secret pour vous!";
        }

    }


    render() {
        return <div>
            <div className="bar">
                <h2> Résultats </h2>
            </div>
            <div className="result">
                <h5 className="nb"> Vous avez obtenu un score de :</h5>
                <h3 className= "score">{this.props.resultat} </h3> 
                <img src={this.renderSwitch()} alt="" height="180px" margin-top="10px"></img>
                <h5> {this.renderContent()} </h5>
            </div>

        </div>

    }

}

export default Resultat;