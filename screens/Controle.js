import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import Progression from '../components/Progression';
import '../screens/Controle.css';
import Resultat from './Resultat.js';


class Controle extends Component {
  state = {
    type: 'C',
    content: '',
    rang: 1,
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    r1: '',
    r2: '',
    r3: '',
    r4: '',
    r5: '',
    scorePB: '',
    showResult : false,
    showQuestions: true,
    scoreP: ''
  }

  constructor(props) {
    super(props);

    this._q1handleChange = this._q1handleChange.bind(this);
    this._q2handleChange = this._q2handleChange.bind(this);
    this._q3handleChange = this._q3handleChange.bind(this);
    this._q4handleChange = this._q4handleChange.bind(this);
    this._q5handleChange = this._q5handleChange.bind(this);
    this.getParcours();
    this.retourParcours = this.retourParcours.bind(this);
  }

  _q1handleChange(event) {
    if (event.target.value == "true") 
    { this.setState({ r1: true }); }
    else {
      this.setState({ r1: false });
    }

  }
  _q2handleChange(event) {
    if (event.target.value == "true") 
    { this.setState({ r2: true }); }
    else {
      this.setState({ r2: false });
    }

  }
  _q3handleChange(event) {
    if (event.target.value == "true") 
    { this.setState({ r3: true }); }
    else {
      this.setState({ r3: false });
    }

  }
  _q4handleChange(event) {
    if (event.target.value == "true") 
    { this.setState({ r4: true }); }
    else {
      this.setState({ r4: false });
    }

  }
  _q5handleChange(event) {
    if (event.target.value == "true") 
    { this.setState({ r5: true }); }
    else {
      this.setState({ r5: false });
    }

  }

  retourParcours(){
    this.setState({showQuestions: true})
    this.setState({showResult: false})

  }

  getParcours(){
    var self = this;
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"type":this.props.type,"rang":this.state.rang});
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/api/CINE/getparcours", requestOptions)
    .then(response => response.json())
      .then(response => {
        this.setState({content: response.content});
        this.setState({q1: response.questions[0].content});
        this.setState({q2: response.questions[1].content});
        this.setState({q3: response.questions[2].content});
        this.setState({q4: response.questions[3].content});
        this.setState({q5: response.questions[4].content});
        
      })
      .catch(error => console.log('error', error));

      fetch('http://127.0.0.1:3000/api/CINE/progressbars',
      {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              userId: "5e88dec1cf7202b3d1b66d00",
          })
      })

      .then((response) => response.json())

      .then(function (res) {
  
        if (self.props.type == "C")
        {
          self.setState({ scorePB: res[0] })
        }
        else if (self.props.type == "I")
        {
          self.setState({ scorePB: res[1] })
        }
        else if (self.props.type == "N")
        {
          self.setState({ scorePB: res[2] })
        }
        else if (self.props.type == "E")
        {
          self.setState({ scorePB: res[3] })
        }

          
      }).catch(function (error) {
          console.log(error);
      })
    

  }


  handlePress = async () => {
    var self = this;
    console.log(this.props.type)
    console.log(this.state.rang)
    console.log(this.state.r1, this.state.r2, this.state.r3, this.state.r4, this.state.r5)
    fetch('http://127.0.0.1:3000/api/CINE/putsession',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: this.props.type,
          rang: this.state.rang,
          userId: "5e88dec1cf7202b3d1b66d00",
          response: [this.state.r1, this.state.r2, this.state.r3, this.state.r4, this.state.r5]
        })
      })
      .then(response => response.json())
      .then(function (response) {
        console.log(response.cpt)
        self.setState ({scoreP: response.cpt})
        if (self.state.rang >= 3) {
          self.setState({ rang: 1 });
          self.getParcours()
        }
        else {
          self.setState({ rang: self.state.rang + 1 });
          self.getParcours()
        }
        self.setState({showResult: true})
        self.setState({showQuestions: false})

        console.log("score parcours", self.state.scoreP)
      })


      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    return <div className="baba">

  { this.state.showQuestions ?  <div> 

      <div className="bar">
        <h2> {this.props.nom} </h2>
      </div>

      <div className="progressbar">
        <Progression score={this.state.scorePB}></Progression>
      </div> 

      <div className="forme">
        <div className="sujet">
          <h5> {this.state.content} </h5>
        </div>
        <form>
          <label >
            <div className="qcine">
              {"1)" + this.state.q1}
            </div>
            <Input className="question" type="select" onChange={this._q1handleChange} id="qu1" >
            <option value = "choix" >choix</option>
              <option value = "true" >Oui</option>
              <option value = "false" >Non</option>
            </Input>
          </label>
          <label >
            <div className="qcine">
              {"2)" + this.state.q2}
            </div>
            <Input className="question" type="select" onChange={this._q2handleChange} id="qu2" >
              <option value = "choix" >choix</option>
              <option value="true" >Oui</option>
              <option value="false" >Non</option>
            </Input>
          </label>
          <label >
            <div className="qcine">
              {"3)" + this.state.q3}
            </div>
            <Input className="question" type="select" onChange={this._q3handleChange} id="qu3" >
            <option value = "choix" >choix</option>
              <option value="true" >Oui</option>
              <option value="false">Non</option>
            </Input>
          </label>
          <label >
            <div className="qcine">
              {"4)" + this.state.q4}
            </div>
            <Input className="question" type="select" onChange={this._q4handleChange} id="qu4" >
            <option value = "choix" >choix</option>
              <option value="true" >Oui</option>
              <option value="false">Non</option>
            </Input>
          </label>
          <label >
            <div className="qcine">
              {"5)" + this.state.q5}
            </div>
            <Input className="question" type="select" onChange={this._q5handleChange} id="qu5" >
            <option value = "choix" >choix</option>
              <option value="true" >Oui</option>
              <option value="false">Non</option>
            </Input>
          </label>

        </form>

      </div>

     

      <Button className= "valider" onClick={this.handlePress.bind(this)} color="secondary" size="lg" block > Valider </Button>

      </div>  : null } 


      { this.state.showResult ? <Resultat resultat={this.state.scoreP} /> : null }
      { this.state.showResult ? 
        <Button className="retourmenu" onClick={this.retourParcours} block> Continuer </Button> 
        : null }

    </div>

  }



}

export default Controle;