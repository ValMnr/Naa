import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Chatbox from 'react-native-chatbox';

export default class ChatBox extends Component{
  render() {
    const extras = [
        {
          extraStyle: {

          },
          onExtraClick: () => {console.log('click extra1')},
          icon: require('../assets/images/robot-dev.png'),
          extraIconStyle: {
            width: 40,
            height: 40
          },
          textStyle: {
            color: 'red'
          },
          text: 'extra条目1'
        },
        {
          extraStyle: {

          },
          onExtraClick: () => {console.log('click extra2')},
          icon: require('../assets/images/robot-dev.png'),
          extraIconStyle: {
              width: 40,
              height: 40
          },
          textStyle: {
              color: 'blue'
          },
          text: 'extra条目2'
        }
    ]

    const emojis = new Map(
        [["grinning", "😀"],
        ["grin", "😁"],
        ["joy", "😂"],
        ["smiley", "😃"],
        ["smile", "😄"],
        ["sweat_smile", "😅"],
        ["laughing", "😆"]])

    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text>Chatbox Component Demo</Text>
        </View>
        <Chatbox
          containerStyle={{

          }}
          extraContainerStyle={{

          }}
          emojiContainerStyle={{

          }}
          onStartRecord={() => {console.log('start record')}}
          onStopRecord={() => {console.log('stop record')}}
          onSendTextMessage={message => {console.log(message)}}
          extras={extras}
          emojis={emojis}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});