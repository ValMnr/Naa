
import React, { Component } from 'react';
import {
    Image, 
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import "../screens/App.css";


import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

class CreateAccount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          username: '',
          mail: '',
           password: '' ,
        prenom:'',
        sexe:null,
        age:0,
        domaine : null,
        fonction : null,
        source : null, 
        echelle : null, 
        timide: null,
        confiance: null, 
        oral:null,
        traitement:null,
        chronique:null,
        attenuer:null,
        moyens:null,

        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  ///AFFICHE UN MESSAGE POUR DIRE QUE L'AUTHENTIFICATION A ETE REUSSI 
    handleSubmit(event) {
      alert("Authentification reussie"); 
      event.preventDefault();
    }
  
    render() {
      return (
    
        <div className=" scroll"> 
        <div className="background">
        <div className="blocktext">   
        <div className="business">

        <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
        <Image 
          style={{width: 100, height: 100}}
          source={require('../assets/images/naa.png')}
        />
</View>
<legend>Informations de Connexion</legend> 
            <Form>

        <FormGroup>
        
       <Label  for="exampleUsername"></Label>
       <Input className="arrondi" type="username" name="username" id="exampleUsername" placeholder="Entrez votre pseudo" />
     </FormGroup>
        <FormGroup>
       
          <Label  for="exampleEmail"></Label>
          
          <Input className="arrondi" type="email" name="email" id="exampleEmail" placeholder="Entrez votre e-mail" />
      
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword"></Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Entrez votre mot de passe" />
        </FormGroup>
       </Form>

       <legend>Informations Personnelles </legend> 

     <Form>

    <FormGroup>
    <Label  for="prenom"></Label>
       <Input className="arrondi" type="prenom" name="prenom" id="prenom" placeholder="Entrez votre prénom" />
    </FormGroup>
     
    <FormGroup>
        <Label for="sexe">Sexe</Label>
        <Input type="select" name="sexe" id="exampleSexe">
          <option>Femme</option>
          <option>Homme</option>
        </Input>
    </FormGroup>

    <FormGroup>
    <Label  for="age">Age</Label>
       <Input className="arrondi" type="age" name="age" id="age" placeholder="Entrez votre âge" />
    </FormGroup>

    <FormGroup>
    <Label  for="domaine">Domaine de Profession</Label>
    <Input type="select" name="domaine" id="exampleDomaine">
          <option>Agriculture</option>
          <option>Maintenance</option>
          <option>Ingénieurs</option>
          <option>Transpors, logistique et tourisme</option>
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
    </Input>    
    </FormGroup>

    <FormGroup>
    <Label  for="fonction">Fonction professionelle</Label>
       <Input className="arrondi" type="fonction" name="fonction" id="fonctino" placeholder="Entrez votre fonction professionnelle" />
    </FormGroup>
        
    <FormGroup>
        <Label for="source">Source</Label>
        <Input type="select" name="source" id="exampleSource">
          <option>Familial</option>
          <option>Professionnel</option>
          <option>Financier</option>
          <option>Examens, Concours</option>
          <option>Santé</option>
        </Input>
    </FormGroup>

    <FormGroup>
        <Label for="Niveau_Stress">Niveau de Stress</Label>
        <CustomInput type="range" id="Niveau_Stress" name="niveaustress" />
    </FormGroup>
    
    <FormGroup>
        <Label for="timide">Vous considerez-vous comme timide ? </Label>
        <div>
          <CustomInput type="checkbox" id="Tpositif" label="Oui" inline />
          <CustomInput type="checkbox" id="Tnegatif" label="Non" inline />
        </div>
    </FormGroup>
       
    <FormGroup>
        <Label for="confiance">Avez-vous confiance en vous ? </Label>
        <div>
          <CustomInput type="checkbox" id="Coui" label="Oui" inline />
          <CustomInput type="checkbox" id="Cnon" label="Non" inline />
        </div>
    </FormGroup>
       
    <FormGroup>
        <Label for="oral">Etes-vous à l'aise à l'oral ? </Label>
        <div>
          <CustomInput type="checkbox" id="Ooui" label="Oui" inline />
          <CustomInput type="checkbox" id="Onon" label="Non" inline />
        </div>
    </FormGroup>  
    
    <FormGroup>
        <Label for="stress">Avez-vous déjà pris un traitement contre le stress ? </Label>
        <div>
          <CustomInput type="checkbox" id="Troui" label="Oui" inline />
          <CustomInput type="checkbox" id="Trnon" label="Non" inline />
        </div>
    </FormGroup>  

    <FormGroup>
        <Label for="chronique">Qualifierez-vous votre stress de chronique ? </Label>
        <div>
          <CustomInput type="checkbox" id="Croui" label="Oui" inline />
          <CustomInput type="checkbox" id="Crnon" label="Non" inline />
        </div>
    </FormGroup>
       
    <FormGroup>
        <Label for="traitement">Avez-vous déjà réussi à atténuer votre stress? </Label>
        <div>
          <CustomInput type="checkbox" id="Croui" label="Oui" inline />
          <CustomInput type="checkbox" id="Crnon" label="Non" inline />
        </div>
    </FormGroup>

    <FormGroup >
    <div className="float_right">
    <Button color="secondary" size="lg" block>Valider</Button>
    </div>
    </FormGroup>
    
    </Form>

    </div>
    </div>
    </div>
   </div>
  
      );
    }
  }

export default CreateAccount ; 
