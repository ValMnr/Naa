import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import cine from "../components/cine.json"; 
import Progression from '../components/Progression';
import '../screens/Controle.css';


class Controle extends Component  {
    state = {
        rang:1,
        q1:"",
        q2:"",
        q3:"",
        q4:"",
        q5:""
      }

    constructor(props) {
        super(props);
        var self=this;


        this._q1handleChange = this._q1handleChange.bind(this);
        this._q2handleChange = this._q2handleChange.bind(this);
        this._q3handleChange = this._q3handleChange.bind(this);
        this._q4handleChange = this._q4handleChange.bind(this);
        this._q5handleChange = this._q5handleChange.bind(this);
        this.changerang = this.changerang.bind(this);
        
      } 

      _q1handleChange(event) {
          if (event.target.value==="true")
          {this.setState({ q1:true });}
          else {
            this.setState({ q1:false });
          }
                
      }
      _q2handleChange(event) {
        if (event.target.value==="true")
        {this.setState({ q2:true });}
        else {
          this.setState({ q2:false });
        }
              
    }
    _q3handleChange(event) {
        if (event.target.value==="true")
        {this.setState({ q3:true });}
        else {
          this.setState({ q3:false });
        }
              
    }
    _q4handleChange(event) {
        if (event.target.value==="true")
        {this.setState({ q4:true });}
        else {
          this.setState({ q4:false });
        }
              
    }
    _q5handleChange(event) {
        if (event.target.value==="true")
        {this.setState({ q5:true });}
        else {
          this.setState({ q5:false });
        }
              
    }

    componentDidMount(){
        this.changerang
    }
    changerang(){
        if (this.state.rang>3){
            this.setState({rang:1});
        }
        else {
            this.setState({rang:this.state.rang+1});
        }

    }
    

      handlePress =  async () => {
        
        fetch('http://127.0.0.1:3000/api/CINE/putsession', 
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: "C",
            rang: this.state.rang,
            userId: "5e88dec1cf7202b3d1b66d00",
            response: [this.state.q1,this.state.q2,this.state.q3,this.state.q4,this.state.q5]
          })
        })
          .then(function(response) {
            console.log(response)
            this.changerang();
          } )

          .catch((error) => {
            console.error(error);
          });  
         
      }

    render(){
        return (cine.Controle.map((c) => {
            if (c.id==this.state.rang){
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
                            <Input type="select" onChange={this._q1handleChange} id="qu1" style={{ width: "20%", marginLeft:"135px"}}>
                            <option value="true" >Oui</option>
                            <option value="false">Non</option>
                            </Input>
                        </label>
                        <label > 
                            <div className="qcine">
                            {"2)"+c.q2}
                            </div>
                            <Input type="select" onChange={this._q2handleChange} id="qu2" style={{ width: "20%", marginLeft:"135px"}}>
                            <option value="true" >Oui</option>
                            <option value="false" >Non</option>
                            </Input>
                        </label>
                        <label > 
                            <div className="qcine">
                            {"3)"+c.q3}
                            </div>
                            <Input type="select" onChange={this._q3handleChange} id="qu3" style={{ width: "20%", marginLeft:"135px"}}>
                            <option value="true" >Oui</option>
                            <option value="false">Non</option>
                            </Input>
                        </label>
                        <label > 
                            <div className="qcine">
                            {"4)"+c.q4}
                            </div>
                            <Input type="select" onChange={this._q4handleChange} id="qu4" style={{ width: "20%", marginLeft:"135px"}}>
                            <option value="true" >Oui</option>
                            <option value="false">Non</option>
                            </Input>
                        </label>
                        <label > 
                            <div className="qcine">
                            {"5)"+c.q5}
                            </div>
                            <Input type="select" onChange={this._q5handleChange} id="qu5" style={{ width: "20%", marginLeft:"135px"}}>
                            <option value="true" >Oui</option>
                            <option value="false">Non</option>
                            </Input>
                        </label>

                    </form>
                    
                    </div>

                    <Button onClick={this.handlePress.bind(this)}  color="secondary" size="lg" block style={{width:"30%",marginLeft:"130px"}}> Valider </Button>

                </div>
                
            }
            
            
        })

        )
    
}
    
}

export default Controle;