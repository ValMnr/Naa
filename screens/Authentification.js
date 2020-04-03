
import React, { Component } from 'react';
import {
    Image, 
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "../screens/App.css";


import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

class Authentification extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          mail: '',
           password: '' };
  
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
          style={{width: 300, height: 300}}
          source={require('../assets/images/naa.png')}
        />
</View>
          
            <Form>
        <FormGroup>
       
          <Label  for="exampleEmail"></Label>
          
          <Input className="arrondi" type="email" name="email" id="exampleEmail" placeholder="Entrez votre e-mail" />
      
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword"></Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Entrez votre mot de passe" />
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

export default Authentification ; 
