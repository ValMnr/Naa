import React, {useRef, useState, useEffect} from 'react';
import {Animated, Text, View, StyleSheet} from 'react-native';
import vingt from './images/20.png';
import quatre from './images/40.png';
import six from './images/60.png';
import huit from './images/80.png';
import cent from './images/100.png';
import './Controle.css';


const res=0.2;

const Resultat = () => {

    

    if (res==0.2){
    return <div>
        <div className="bar">
        <h2> Résultats </h2>
        </div>
        <div className="result">
        <img src={vingt} alt="" height="180px" margin-top="10px"></img>

        <h5 className="nb"> Vous avez obtenu un score de 20% </h5>
        <h7> Vous ferez mieux la prochaine fois, il faut s'exercer!</h7>
        
        </div>

        <button className="retourmenu">
        Continuer
        </button>
        </div>
    
    }

    else if (res==0.4){
        return <div>
        <div className="bar">
        <h2> Résultats </h2>
        </div>
        <div className="result">
        <img src={quatre} alt="" height="180px" margin-top="10px"></img>

        <h5 className="nb"> Vous avez obtenu un score de 40% </h5>
        <h7> C'est pas trop ca... On s'y met!</h7>
        
        </div>
        <button className="retourmenu">
        Continuer
        </button>
        </div>
    }
    
    else if (res==0.6){
        return <div>
        <div className="bar">
        <h2> Résultats </h2>
        </div>
        <div className="result">
        <img src={six} alt="" height="180px" margin-top="10px"></img>

        <h5 className="nb"> Vous avez obtenu un score de 60% </h5>
        <h7> Vous Ferez mieux la prochaine fois. Continuez! </h7>
        
        </div>
        <button className="retourmenu">
        Continuer
        </button>
        </div>
    }

    else if (res==0.8){
        return <div>
        <div className="bar">
        <h2> Résultats </h2>
        </div>
        <div className="result">
        <img src={huit} alt="" height="180px" margin-top="10px"></img>

        <h5 className="nb"> Vous avez obtenu un score de 80% </h5>
        <h7> C'est presque ça. Vous y êtes presque!</h7>
        
        </div>
        <button className="retourmenu">
        Continuer
        </button>
        </div>
    }

    else if (res==1){
        return <div>
        <div className="bar">
        <h2> Résultats </h2>
        </div>
        <div className="result">
        <img src={cent} alt="" height="180px" margin-top="10px"></img>

        <h5 className="nb"> Vous avez obtenu un score de 100% </h5>
        <h7> Bravo!! Le stress n'a plus de secret pour vous!</h7>
        
        </div>
        <button className="retourmenu">
        Continuer
        </button>
        </div>
    }
}


export default Resultat;