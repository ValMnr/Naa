import React, { Component } from 'react';
import Humeur from '../components/Humeur';
import ProfilPsy from '../components/ProfilPsy';
import './Controle.css';



export class User extends Component {
    render (){
        return (

            <div className="User">
        
            <div className="profilpsy">
            <h3 className="titre"> MON PROFIL PSY </h3>
            <ProfilPsy></ProfilPsy>

            </div>
            <h3 className= "titre">  MES HUMEURS DES DERNIERS JOURS </h3>
            <div className="humeur">

            <Humeur></Humeur>

            </div>
            </div>
        );

    }


}


export default User;