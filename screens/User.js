import React, { Component } from 'react';
import Progression from '../components/Progression';
import InfoUser from '../components/InfoUser';
import Humeur from '../components/Humeur';
import ProfilPsy from '../components/ProfilPsy';
import './Controle.css';



export class User extends Component {
    render (){
        return (

            <div className="User">
            <div className="infouser">

            <InfoUser></InfoUser>

            </div>
            <div className="profilpsy">

            <ProfilPsy></ProfilPsy>

            </div>
            <div className="humeur">

            <Humeur></Humeur>

            </div>
            <div className="progressbar">

            <Progression></Progression>
            </div>
            </div>
        );

    }


}


export default User;