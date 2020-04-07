
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

 

class HomePage extends React.Component {
  
  constructor(props) 
  {
    super(props);

    this.handleClickAuth = this.handleClickAuth.bind(this);
    this.handleClickCreate = this.handleClickCreate.bind(this);

    this.state = {
      isClickAuth: false,
      isClickCreate: false};
  }

  handleClickAuth() 
  {
    this.setState({isClickAuth: true});
  }
  handleClickCreate() 
  {
    this.setState({isClickCreate: true});
  }
    render() {
    
      const isClickAuth = this.state.isClickAuth ; 
      const isClickCreate = this.state.isClickCreate ; 

    if (isClickAuth == true)
    {
      return <Authentification />
    }
    if (isClickCreate == true)
    {
      return <CreateAccount />
    }
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
color="secondary" size="lg" block

onClick = {this.handleClickAuth}
>Se connecter
</Button>

<br/>

<Button 
color="secondary" size="lg" block

onClick = {this.handleClickCreate}
>Se connecter
</Button></div>
    </div>
   
    </div>
    </div>
      );
    }
  
  }
export default HomePage ; 

/*
export default function HomePage ({navigation})
 {
return (
 
  <div className="border">
  <div className="blocktext">   
  <div className="business">

  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

<Image 
          style={{width: 300, height: 300}}
          source={require('../assets/images/naa.png')}
        />

    <Button
      
      onClick={() => navigation.navigate('Auth')}
      > Se connecter </Button>
    <br/>
    <Button
      
      onClick={() => navigation.navigate('Create')}
      > S'inscrire </Button>

  </View>
  </div>
  </div>
  </div>
);
}

*/