
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "../screens/App.css";

export default class Authentification extends React.Component {
  constructor(props) {
    super(props)

    // la state de notre composant est utilisé pour
    // stocker quelques infos renvoyées par l'API
    this.state = {
      email: '', // email
      password: '', // password
      loading:false,
      message:"",
      isAuth: false
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

  }

  
  handleChangeEmail(event) { 
       this.setState({
         email: event.target.value
      });
        }

        handleChangePassword(event) { 
          this.setState({
            password: event.target.value 
          });
           }

    handlePress =  async () => {
      console.log("lol");
  var self=this;
  var objetnn = false ; 
      return fetch('http://127.0.0.1:3000/api/user/login', 
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        })
      })
    
      .then((response) => {
        console.log(response.status);
        response.json();
        if (response.status==200)
        {objetnn = true ; }
      })
           .then((json) => {
          console.log(json);
          if(objetnn == true)
         { 
         self.setState({isAuth:true});
         }
         else
         {
          self.setState({isAuth:false});
  
         }
         console.log(this.state.isAuth);
         this.Authent();
          return json;
        })
  
        .catch((error) => {
          console.error(error);
        });
    }

  Authent = () =>
  {this.props.functioncb(this.state.isAuth)}


    render() {
     
      return (
        <div className=" scroll"> 
        <div className="background">
        <div className="blocktext">   
        <div className="business">
          
            <Form>
        <FormGroup>
       
          <Label  for="exampleEmail"></Label>
          
          <Input  
          type="email" 
          name="email" 
          id="exampleEmail" 
          value={this.state.email} 
          onChange={this.handleChangeEmail.bind(this)} 
          placeholder="Entrez votre e-mail" 
          />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword"></Label>
          <Input type="password" name="password" id="examplePassword" 
          value={this.state.password} 
          onChange={this.handleChangePassword.bind(this)}  
          placeholder="Entrez votre mot de passe" />
        </FormGroup>

        <Button 

                 
        onClick={this.handlePress.bind(this) } 
        color="secondary" 
        size="lg" 
        block

        //onClick={this.handleClickAuth.bind(this)}      
                   >
                     Valider
                </Button>
       </Form>
       </div>
    </div>
   
    </div>
    </div>

        
      );
    }
  }

  const styles = StyleSheet.create({
    
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
  });
