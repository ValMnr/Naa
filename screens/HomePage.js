
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

import 'bootstrap/dist/css/bootstrap.min.css';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from '@react-navigation/native';

import { MonoText } from '../components/StyledText';
import Authentification from '../screens/Authentification';

 
/*
class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: '' };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  ///AFFICHE UN MESSAGE POUR DIRE QUE L'AUTHENTIFICATION A ETE REUSSI 
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
        <div className="border">
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
<br/><br/><br/>
<Button 
title = "Se connecter"

/>

<br/>

<Button color="secondary" size="lg" block>S'inscrire</Button>
</div>
    </div>
   
    </div>
    </div>
      );
    }
  }

export default HomePage ; 
*/
export default function HomePage ({navigation})
 {
return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Se connecter</Text>
    <Button
      title="Se connecter"
      onClick={() => navigation.navigate('Auth')}
    />
  </View>
);
}