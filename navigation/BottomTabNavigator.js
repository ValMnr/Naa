import * as React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import Accueil from '../screens/Accueil';
import User from '../screens/User';
import Discussion from '../screens/Discussion';
import Controle from '../screens/Controle';
import Resultat from '../screens/Resultat';
import Authentification from '../screens/Authentification';
import HomePage from '../screens/HomePage';
import CreateAccount from '../screens/CreateAccount';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>

      <BottomTab.Screen
        name="Home"
        component={Accueil}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />

      <BottomTab.Screen
        name="User"
        component={Resultat}
        options={{
          title: 'User',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />

      <BottomTab.Screen
        name="GetHelp"
        component={Controle}
        options={{
          title: 'GetHelp',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-chatboxes" />,
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={Discussion}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-settings" />,

        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    
    case 'Home':
      return 'Home';
    case 'User':
      return 'Cine';
    case 'GetHelp':
      return 'How to get Help';
    case 'Settings':
      return 'Settings';

    
  }
}
