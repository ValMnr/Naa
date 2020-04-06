import React, {useRef, useState, useEffect, Component} from 'react';
import {Animated, Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';



class Progression extends Component  {   
    state = {
        data : [
            {recup : 3},
        ]
    }
      constructor (props){
        super(props); 
        var data= [];
        var self = this;

            fetch('http://127.0.0.1:3000/api/CINE/progressbars',  
        {
        
        method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            userId: "5e88dec1cf7202b3d1b66d00",
        })
        })

        .then((response) => response.json())

        .then(function (res) {
            console.log(res.score[0]);
            data = [
                {recup : res.score[0]}
            ]
            
       }).then(function () {
        self.setState({ data: data });
    })

       .catch(function (error) {
        console.log(error);
      })

      
    }
    
    render(){
        var data=this.state.data;
        var score = data[0].recup/15*100;
        var barWidth = score.toString();
        barWidth += '%';
        return (
            <View style={styles.container}>
            <Text>
                Progression
            </Text>
            <View style={styles.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: "#2F7F1F", width:barWidth }]} />
            </View>
            <Text> {barWidth}</Text>
            
            </View>
    );
    }
    
    
}


export default Progression;

const styles = StyleSheet.create({
    container: {flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,},
    progressBar: {
        height: 10,
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
                 }           
  });