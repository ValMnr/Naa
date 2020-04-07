
import React from 'react';
import {
    Image, 
  View
} from 'react-native';
import { Button } from 'reactstrap';
import "../screens/App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Authentification from '../screens/Authentification';
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
        <div className = "text">
       
        <NavBar/>
        <div className = "background">
        



{this.state.logotexte ?
<View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
        <Image 
          style={{width: 200, height: 200}}
          source={require('../assets/images/naa.png')}
        />
         
</View>
:null}

{this.state.logotexte ?
<legend >  Coucou ! Moi c'est Naa </legend>
: null
}


{this.state.formAuth ?
<Button 
 color="secondary"  
block
size="m"
onClick = {this.handleClickAuth}
>Se connecter
</Button>
  : null  }

{this.state.ifAuth ? 
<Authentification functioncb = {this.isConnected} /> : null }

{this.state.Deconnecter ? 
<Button 
color="secondary"  

size="m"
onClick = {this.handleClickDeconnexion}
>Se déconnecter
</Button>
:null}

<br></br>


{this.state.Inscription ? 
<Button 
color="secondary" 
size="m" 
block
onClick = {this.handleClickCreate}
>S'inscrire
</Button> : null }



{this.state.formCreate ? 
<CreateAccount functioncb2 = {this.isCreated} /> : null }

</div>



</div>
      );
    }
  }

export default Accueil ;