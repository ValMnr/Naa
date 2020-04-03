import React from 'react';
import { Stylesheet, Text, View } from 'react-native';


    const Header = (props) => {
        return ( 
            <View style={Stylesheet.header}> 
                <Text style={Styles.title}>{ props.title } </Text>
            </View>
        )
    }

    const styles = Stylesheet.create({
        header: { 
            backgroundColor: '#171717' , 
            height: 60,
            alignItem: 'center',
            justifyContent: 'center'
        },
        title: {
            color : '#F3F3F3',
            fontSize: 28,
            fontWeight: '900',
            textTransform: 'uppercase'
        }
    });

    export default Header ; 