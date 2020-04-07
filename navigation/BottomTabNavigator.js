import * as React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import Accueil from '../screens/Accueil';
import User from '../screens/User';
import Discussion from '../screens/Discussion';

import CINEBOUT from '../components/CINEBOUT';


const BottomTab = createBottomTabNavigator();

const INITIAL_ROUTE_NAME = 'Connexion';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
   // <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>

   <BottomTab.Navigator initialRouteName = "Home" >

      <BottomTab.Screen
        name="Home"
        component={Accueil}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />

      <BottomTab.Screen
        name="User"
        component={User}
        options={{
          title: 'User',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,

        }}
      />

      <BottomTab.Screen
        name="CINE"
        component={CINEBOUT}
        options={{
          title: 'CINE',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-bulb" />,
        }}
      />

      <BottomTab.Screen
        name="Get Help"
        component={Discussion}
        options={{
          title: 'Get Help',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-chatboxes" />,

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
      return 'Profil'; 
    case 'CINE':
      return 'CINE';
    case 'Get Help':
      return 'How to get Help';

  }
}
