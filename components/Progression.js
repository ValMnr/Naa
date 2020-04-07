import React, { useRef, useState, useEffect, Component } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';



class Progression extends Component {
   
    constructor(props) {
        super(props);
        
      
      

    }

    render() {
        

        var avance = Math.round(this.props.score / 15 * 100);
        var barWidth =avance.toString();
        barWidth += '%';
        return (
            <View style={styles.container}>
                <Text>
                    Progression
            </Text>
                <View style={styles.progressBar}>
                    <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: "#2F7F1F", width: barWidth }]} />
                </View>
                <Text> {barWidth}</Text>

            </View>
        );
    }


}


export default Progression;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    progressBar: {
        height: 10,
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
    }
});