import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import cine from "../components/cine.json"; 
import Progression from '../components/Progression';
import '../screens/Controle.css';

const rang=2;

class Controle extends Component  {
    state = {
        q1:true,
        q2:true,
        q3:true,
        q4:true,
        q5:true
      }

    constructor(props) {
        super(props);

        var self = this;

        this._q1handleChange = this._q1handleChange.bind(this);
        this._q2handleChange = this._q2handleChange.bind(this);
        this._q3handleChange = this._q3handleChange.bind(this);
        this._q4handleChange = this._q4handleChange.bind(this);
        this._q5handleChange = this._q5handleChange.bind(this);


        
      } 

      _q1handleChange(event) {
        this.setState({ q1: event.target.value});
      }
      _q2handleChange(event) {
        this.setState({ q2: event.target.value});
      }
      _q3handleChange(event) {
        this.setState({ q3: event.target.value});
      }
      _q4handleChange(event) {
        this.setState({ q4: event.target.value});
      }
      _q5handleChange(event) {
        this.setState({ q5: event.target.value});
      }
    

      handlePress =  async () => {
        console.log(rang);
        
        return fetch('http://127.0.0.1:3000/api/CINE/putsession', 
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: "C",
            rang: 2,
            userId: "5e88dec1cf7202b3d1b66d00",
            response: [this.state.q1,this.state.q2,this.state.q3,this.state.q4,this.state.q5]
          })
        })
          .then((response) => response.json())
          .then(function (res) {
              log.console("hello")
            self.setState({ 
                q1: res.data[0].q1,
                q2: res.data[0].q2,
                q3: res.data[0].q3,
                q4: res.data[0].q4,
                q5: res.data[0].q5
             });
        })
          .then((json) => {
            
            return json;
            
          })
          
          

          .catch((error) => {
            console.error(error);
          });         
      }

    render(){
        if (rang <3){
        return (cine.Controle.map((c) => {
            if (c.id==rang){
                return <div className="baba">
                    <div className="bar">
                        <h2> Contrôle </h2>
                    </div>

                    <div className="progressbar">
                        <Progression></Progression>
                    </div>

                    <div className="forme">
                    <div className="sujet">
                        <h5> {c.sujet} </h5>
                    </div>
                    <form>
                        <label > 
                            <div className="qcine">
                            {"1)"+c.q1}
                            </div>
                            <Input type="select" onChange={this._q1handleChange} id="q1" style={{ width: "20%", marginLeft:"135px"}}>
                            <option value={true} >Oui</option>
                            <option value={false}>Non</option>
                            </Input>
                        </label>
                        <label > 
                            <div className="qcine">
                            {"2)"+c.q2}
                            </div>
                            <Input type="select" onChange={this._q2handleChange} id="q2" style={{ width: "20%", marginLeft:"135px"}}>
                            <option value={true} >Oui</option>
                            <option value={false}>Non</option>
                            </Input>
                        </label>
                        <label > 
                            <div className="qcine">
                            {"3)"+c.q3}
                            </div>
                            <Input type="select" onChange={this._q3handleChange} id="q3" style={{ width: "20%", marginLeft:"135px"}}>
                            <option value={true} >Oui</option>
                            <option value={false}>Non</option>
                            </Input>
                        </label>
                        <label > 
                            <div className="qcine">
                            {"4)"+c.q4}
                            </div>
                            <Input type="select" onChange={this._q4handleChange} id="q4" style={{ width: "20%", marginLeft:"135px"}}>
                            <option value={true} >Oui</option>
                            <option value={false}>Non</option>
                            </Input>
                        </label>
                        <label > 
                            <div className="qcine">
                            {"5)"+c.q5}
                            </div>
                            <Input type="select" onChange={this._q5handleChange} id="q5" style={{ width: "20%", marginLeft:"135px"}}>
                            <option value={true} >Oui</option>
                            <option value={false}>Non</option>
                            </Input>
                        </label>

                    </form>
                    
                    </div>

                    <Button onClick={this.handlePress.bind(this)}  color="secondary" size="lg" block style={{width:"30%",marginLeft:"130px"}}>Valider </Button>

                </div>
                
            }
            
            
        })

        )
    }
}
    
}

export default Controle;