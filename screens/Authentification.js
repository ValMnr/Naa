
import React, { Component, useReducer } from 'react';
import {
  AsyncStorage,
    Image, 
  Platform,
  StyleSheet,
  StyledText,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, Spinner } from 'reactstrap';
import "../screens/App.css";
import Accueil from '../screens/Accueil';

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
      isClickAuth: false
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleClickAuth = this.handleClickAuth.bind(this);

  }

  handleClickAuth() 
  {
    this.setState({isClickAuth: true});
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

           login=async ()=>{
            const email = await AsyncStorage.getItem("email")
            const password = await AsyncStorage.getItem("password")
            if(email && password){
                this.setState({email,password})
                this.authenticate(email, password)
    
            }
        }

        componentDidMount(){
          this.login()
      }

      authenticate=(email, password)=>{
        console.log("lol de fou");
        this.setState({loading:true , message:""})
        axios.post('http://127.0.0.1:3000/api/user/login')
        .then(async res=>{
            this.setState({loading:false})
            if(res.data.user_info.status==="Active"){
                await AsyncStorage.setItem("email",this.state.email)
                await AsyncStorage.setItem("password",this.state.password)
                this.props.navigation.navigate("Home")


            }else {
                this.setState({message:"This account is not active",loading:false})

            }
        })
        .catch(err=>{
            this.setState({message:"Error connecting to the server, Please try again later.",loading:false})

        })
    }

 handlePress =  async () => {
    console.log("lol");
    
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
  
    .then((response) => response.json())
         .then((json) => {
        console.log(json);
        return json;
      })

      .catch((error) => {
        console.error(error);
      });
  }


    render() {
      const isClickAuth = this.state.isClickAuth ; 
      if (isClickAuth == true)
      {
        return <Accueil />
      }
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
          <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.handleChangePassword.bind(this)}  placeholder="Entrez votre mot de passe" />
        </FormGroup>

        <Button 
        disabled={this.state.loading} 
        /*onClick={()=>this.authenticate(this.state.email,this.state.password)}>
                    {
                        (this.state.loading) ? <Spinner  color="white"/>
                        :
                        <Text style={{color:"#fff"}}>LOGIN</Text>

                    }
                    */
                 
        onClick={this.handlePress.bind(this)} 
        color="secondary" 
        size="lg" block
        onClick={this.handleClickAuth.bind(this)}      
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
/*
export default function Authentification ()
 {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
  );
}

*/
/*
import React from "react";
import { AuthContext } from "../App";

export default function Authentification () {
  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null
  };
const [data, setData] = React.useState(initialState);
const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = async () => {
   
    event.preventDefault();
   
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    });
    
    console.log("lol");

    
    fetch('http://127.0.0.1:3000/api/user/login', {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(resJson => {
        dispatch({
            type: "LOGIN",
            payload: resJson
        })
      })
      .catch(error => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusText
        });
      });
  };
return (
    <div className="login-container">
      <div className="card">
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <h1>Login</h1>

			<label htmlFor="email">
              Email Address
              <input
                type="text"
                value={data.email}
                onChange={handleInputChange}
                name="email"
                id="email"
              />
            </label>

			<label htmlFor="password">
              Password
              <input
                type="password"
                value={data.password}
                onChange={handleInputChange}
                name="password"
                id="password"
              />
            </label>

			{data.errorMessage && (
              <span className="form-error">{data.errorMessage}</span>
            )}

           <button disabled={data.isSubmitting}>
              {data.isSubmitting ? (
                "Loading..."
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

*/