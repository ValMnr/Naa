import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ChatBox from '../screens/ChatBox';
import Authentification from '../screens/Authentification';
import HomePage from '../screens/HomePage';
import CreateAccount from '../screens/CreateAccount';
import Accueil from '../screens/Accueil';

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
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />

      <BottomTab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: 'HomePage',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />


      <BottomTab.Screen
        name="Authentification"
        component={Authentification}
        options={{
          title: 'Authentification',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />  
      
      <BottomTab.Screen
        name="Create Account"
        component={CreateAccount}
        options={{
          title: 'Create an Account',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />  

      <BottomTab.Screen
        name="Help"
        component={ChatBox}
        options={{
          title: 'Get Help',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />

      <BottomTab.Screen
        name="Accueil"
        component={Accueil}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    
    case 'Home':
      return 'How to get started';
    case 'HomePage':
      return 'First Page of the App';
    case 'Auth':
      return 'Get Authentificated';
    case 'CreateAccount':
      return 'Create an Account';
    case 'Accueil':
      return 'Welcome';
    
  }
}
