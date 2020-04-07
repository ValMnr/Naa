import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import "../screens/App.css";


export default class CreateAccount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pseudo: '',
        email: '',
        password: '' ,
        firstname:'',
        lastname:'',
        sexe:'',
        age:0,
        professionalSituation : '',
        socialSituation : '',
        children : 0 ,
        stressFactors: '',
        stressEscape: '',
        stressRelief: '',
        emotionalConseq: '',
        physicalConseq: '',
        isCreated: false

        };
      
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePseudo = this.handleChangePseudo.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
       
        this.handleChangeSexe = this.handleChangeSexe.bind(this); 
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeDomaine = this.handleChangeDomaine.bind(this);
        this.handleChangeSocial = this.handleChangeSocial.bind(this);
        this.handleChangeChildren = this.handleChangeChildren.bind(this);
        this.handleChangeFactors = this.handleChangeFactors.bind(this);
        this.handleChangeEscape = this.handleChangeEscape.bind(this);
        this.handleChangeRelief = this.handleChangeRelief.bind(this);
        this.handleChangeEmotion = this.handleChangeEmotion.bind(this);
        this.handleChangePhysical = this.handleChangePhysical.bind(this);
    }
  

    handleChangeEmail(event) {
      this.setState({email: event.target.value});
    }

    handleChangePassword(event) { 
    this.setState({password: event.target.value });
    }

    
    handleChangePseudo(event) { 
    this.setState({pseudo: event.target.value });
    }

    handleChangeFirstName(event) { 
    this.setState({firstname: event.target.value });
    }
   
    handleChangeLastName(event) { 
    this.setState({firstname: event.target.value });
    }

      handleChangeSexe(event) { 
        this.setState({sexe: event.target.value });
      }
  
      handleChangeAge(event) { 
          this.setState({age: event.target.value });
      }
      
      handleChangeDomaine(event) { 
          this.setState({professionalSituation: event.target.value });
      }
     
      handleChangeSocial(event) { 
          this.setState({socialSituation: event.target.value });
          }
      
      handleChangeChildren(event) { 
          this.setState({children: event.target.value });
      }
   
      handleChangeFactors(event) { 
          this.setState({stressFactors: event.target.value });
      }
      
      handleChangeEscape(event) { 
          this.setState({stressEscape: event.target.value });
      }
      
      handleChangeRelief(event) { 
          this.setState({stressRelief: event.target.value });
      }
  
      handleChangeEmotion(event) { 
          this.setState({emotionalConseq: event.target.value });
          }  
  
      handleChangePhysical(event) { 
          this.setState({physicalConseq: event.target.value });
      } 
  
      
    handlePress =  async () => {
      var self = this ; 
      console.log("lol");
      fetch('http://127.0.0.1:3000/api/user/signup', 
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          pseudo:this.state.pseudo,
          firstname:this.state.firstname,
          lastname:this.state.lastname
        })
      })
         .then((response) => { 
         console.log(response.user)})
       
        .catch((error) => {
          console.error(error);
        });
        fetch('http://127.0.0.1:3000/api/createProfile', 
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        email:this.state.email,
        sexe:this.state.sexe,
        age:this.state.age,
        socialSituation : this.state.socialSituation,
        professionalSituation : this.state.professionalSituation, 
        children : this.state.children, 
        stressFactors: this.state.stressFactors,
        stressEscape: this.state.stressEscape, 
        stressRelief:this.state.stressRelief,
        emotionalConseq:this.state.emotionalConseq,
        physicalConseq:this.state.physicalConseq,
        })
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
         self.setState({isCreated:true});
         console.log(this.state.isCreated);
         this.Create();
          return json;
        })
        .catch((error) => {
          console.error(error);
        });
    }
    
    Create = () =>
  {this.props.functioncb2(this.state.isCreated)}


    render() {
      return (
    
<div>
       
<legend>Informations de Connexion</legend> 
            <Form>

        <FormGroup>
        
       <Label  for="exampleUsername"></Label>
       <Input className="arrondi" type="username" name="username" id="exampleUsername" value={this.state.pseudo} 
          onChange={this.handleChangePseudo.bind(this)} placeholder="Entrez votre pseudo" />
     </FormGroup>
        <FormGroup>
       
          <Label  for="exampleEmail"></Label>
          
          <Input className="arrondi" type="email" name="email" id="exampleEmail" value={this.state.email} 
          onChange={this.handleChangeEmail.bind(this)} placeholder="Entrez votre e-mail" />
      
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword"></Label>
          <Input type="password" name="password" id="examplePassword" value={this.state.password} 
          onChange={this.handleChangePassword.bind(this)} placeholder="Entrez votre mot de passe" />
        </FormGroup>
       </Form>

       <FormGroup >
    <div className="float_right">
   


    </div>
    </FormGroup>

       <legend>Informations Personnelles </legend> 

     <Form>

    <FormGroup>
        <Label for="sexe">Sexe</Label>
        <Input type="select" name="sexe" id="exampleSexe"
          value={this.state.sexe} 
          onChange={this.handleChangeSexe.bind(this)}>
          <option>Choix</option>
          <option>Femme</option>
          <option>Homme</option>
        </Input>
    </FormGroup>

    <FormGroup>
    <Label  for="age">Age</Label>
       <Input className="arrondi" type="age" name="age" id="age" value={this.state.age} 
          onChange={this.handleChangeAge.bind(this)} placeholder="Entrez votre âge" /> 
    </FormGroup>

    <FormGroup>
    <Label  for="children">Enfants</Label>
       <Input className="arrondi" type="enfants" name="enfants" id="enfants" value={this.state.children} 
          onChange={this.handleChangeChildren.bind(this)} placeholder="Entrez votre âge" />
    </FormGroup>


    <FormGroup>
    <Label  for="domaine">Domaine de Profession</Label>
    <Input type="select" name="domaine" id="exampleDomaine" value={this.state.professionalSituation} 
          onChange={this.handleChangeDomaine.bind(this)}>>
          <option>Agriculture</option>
          <option>Maintenance</option>
          <option>Ingénieurs</option>
          <option>Transports, logistique et tourisme</option>
          <option>Artisanat</option>
          <option>Gestion, administration publique</option>
          <option>Telecommunications</option>
          <option>Recherche</option>
          <option>Banque et assurances</option>
          <option>Commerce</option>
          <option>Hotellerie, restauration</option>
          <option>Art et Spectacle</option>
          <option>Sante</option>
          <option>Enseignement, formation</option>
          <option>Politique, religion</option>
          <option>Etudiant</option>
    </Input>    
    </FormGroup>
        

    <FormGroup>
        <Label for="Niveau_Stress">Niveau de Stress</Label>
        <CustomInput type="range" id="Niveau_Stress" name="niveaustress" />
    </FormGroup>
    
    <legend>Signes et Symptômes du Stress</legend> 
    
    <FormGroup>
        <Label for="source">D'où vient votre stress ? </Label>
        <Input type="select" name="source" id="exampleSource" value={this.state.stressFactors} 
          onChange={this.handleChangeFactors.bind(this)} >
          <option>Familial</option>
          <option>Professionnel</option>
          <option>Financier</option>
          <option>Examens, Concours</option>
          <option>Santé</option>
          <option>Autre</option>
        </Input>
    </FormGroup>

    <FormGroup>
        <Label for="confiance">Comment se décrit votre stress d'un point de vue émotionnel  </Label>
        <Input type="select" name="emotion" id="exampleEmotion" value={this.state.emotionalConseq} 
          onChange={this.handleChangeEmotion.bind(this)}>
          <option>Irritabilite</option>
          <option>Anxiete</option>
          <option>Mauvaise Estime de Soi</option>
          <option>Constante remise en question</option>
          <option>Autre</option>
            
        </Input>
    </FormGroup>
       
    
    <FormGroup>
        <Label for="stress">Comment se décrit votre stress d'un point de vue physique ? </Label>
        <Input type="select" name="physical" id="examplePhysical" value={this.state.physicalConseq} 
          onChange={this.handleChangePhysical.bind(this)} >
          <option>Maux de tête</option>
          <option>Fatigue</option>
          <option>Vertiges</option>
          <option>Trouble du sommeil</option>
          <option>Autre</option>
          
        </Input>
    </FormGroup>  

       
    <FormGroup>
        <Label for="traitement">Quels sont vos échappatoires actuels pour gérer votre stress ? </Label>
        <Input type="select" name="relief" id="exampleRelief" value={this.state.stressFactors} 
          onChange={this.handleChangeRelief.bind(this)}>
          <option>Tabac</option>
          <option>Alcool</option>
          <option>Troubles Alimentaires</option>
          <option>Autre</option>
          
        </Input>
    </FormGroup>

    <FormGroup>
        <Label for="escape">Quels sont vos solutions actuelles pour gérer votre stress ? </Label>
        <Input type="select" name="escape" id="exampleEscape" value={this.state.stressEscape} 
          onChange={this.handleChangeEscape.bind(this)} >
          <option>Sport</option>
          <option>Relaxation</option>
          <option>Psychothérapie</option>
          <option>Hypnose</option>
          <option>Autre</option>
          
        </Input>
    </FormGroup>

    <FormGroup >
    <div className="float_right">
    <Button onClick={this.handlePress.bind(this)} color="secondary" size="lg" block>Valider</Button>
    </div>
    </FormGroup>
    
    </Form>

  </div>
  
      );
    }
  }