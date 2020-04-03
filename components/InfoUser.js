import React, { Component } from 'react';
import '../screens/Controle.css';




export class InfoUser extends Component {
    render (){
        return (

            <div>
                <div className="bar">
                <h2> Mon Compte </h2>
                </div>

                <center><h9> {"Arthur "+"Covo"}</h9></center>
                <center><h9> {"22" +" ans"}</h9></center>



            </div>

        );

    }


}


export default InfoUser;