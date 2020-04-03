
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

import { MonoText } from '../components/StyledText';
import NavBar from '../screens/NavBar'

class Accueil extends React.Component {
  
  
    render() {
        
      return (
<div>
       
<NavBar/>
        <div className = "border">
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
<legend>  Coucou ! Moi c'est Naa </legend>
</div>
   </div>
   </div>
  </div>
      );
    }
  }

export default Accueil ; 

