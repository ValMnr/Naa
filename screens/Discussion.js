import React, { Component } from 'react';
import Liste from "../components/test.json"; 
import '../screens/Controle.css';
import naa from './images/naa.png';

class Discussion extends Component {
    render (){
        return (
            Liste.Discussion.map((disc) => {
                if (disc.id==1){
                    return <div className="discussion">
                        <div className="bar">
                            <h2> Discussion </h2>
                            </div>
                        
                        <div className="question">
                            <div className="avatar">
                        <img className="naa" src={naa} alt="" ></img>
                        </div>
                        <div className="bulle">
                        <h7> {disc.question} </h7>
                        </div>
                        </div>
                            {
                                disc.reponse.map(s => (<button className="rep">{s}</button>))
                            }
                    </div>
                }
            })
        )

    }
}

export default Discussion;
