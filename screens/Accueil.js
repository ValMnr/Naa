
import React, { Component } from 'react';
import {
    Image, 
    AsyncStorage,
  Platform,
  Alert,
  StyleSheet,
  StyledText,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "../screens/App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Authentification from '../screens/Authentification';
import { MonoText } from '../components/StyledText';
import NavBar from './NavBar'
import CreateAccount from '../screens/CreateAccount';
class Accueil extends React.Component {

  constructor(props) 
  {
    super(props);
  
    this.handleClickAuth = this.handleClickAuth.bind(this);
    this.handleClickCreate = this.handleClickCreate.bind(this);
    this.isConnected=this.isConnected.bind(this);
    this.handleClickDeconnexion = this.handleClickDeconnexion.bind(this);
    this.isCreated=this.isCreated.bind(this);

    this.state = {
      ifAuth: false,
      formAuth:true,
      logotexte:true,
      Deconnecter : false,
      Inscription : true,
      formCreate : false,
    
      };
      
  }
  handleClickDeconnexion()
  {
    this.setState({ifAuth: false});
    this.setState({formAuth : true })
    this.setState({logotexte : true })
    this.setState({Inscription : true })
    this.setState({Deconnecter : false })

  }
  handleClickAuth() 
  {
    this.setState({ifAuth: true});
    this.setState({formAuth : false })
    this.setState({logotexte : false })
    this.setState({Inscription : false })
  }
  handleClickCreate() 
  {
    this.setState({logotexte : false })
    this.setState({formCreate : true})
    this.setState({formAuth : false })
    this.setState({Inscription : false })


  }

  isConnected = (connect) =>
  {
if (connect == true)
{
  this.setState({logotexte : true })
  this.setState({formAuth : false });
  this.setState({ifAuth: false});
  this.setState({Deconnecter : true });
  this.setState({Inscription : false });

}
  }

  isCreated = (create) =>
  {
if (create == true)
{
  this.setState({logotexte : true })
  this.setState({formAuth : false });
  this.setState({ifAuth: false});
  this.setState({Deconnecter : true });
  this.setState({Inscription : false });
this.setState({formCreate : false});
}
  }
    render() {
     
  
      return (
        <div className = "background">
       
<NavBar/>


{this.state.logotexte ?
<View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
        <Image 
          style={{width: 150, height: 150}}
          source={require('../assets/images/naa.png')}
        />
         
</View>
:null}

{this.state.logotexte ?
<legend>  Coucou ! Moi c'est Naa </legend>
: null
}


{this.state.formAuth ?
<Button 
color="secondary"  block
onClick = {this.handleClickAuth}
>Se connecter
</Button>
  : null  }

{this.state.ifAuth ? 
<Authentification functioncb = {this.isConnected} /> : null }

{this.state.Deconnecter ? 
<Button 
color="secondary"  block
onClick = {this.handleClickDeconnexion}
>Se déconnecter
</Button>
:null}


<br/>
{this.state.Inscription ? 
<Button 
color="secondary" size="lg" block
onClick = {this.handleClickCreate}
>S'inscrire
</Button> : null }

{this.state.formCreate ? 
<CreateAccount functioncb2 = {this.isCreated} /> : null }

</div>
 
 
  


      );
    }
  }

export default Accueil ; 



  
   