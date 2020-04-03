import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Links: 'links',
          Controle: 'controle',
          Settings: 'settings',
          Authentification: 'auth',
          HomePage: 'connexion',
          CreateAccount: 'createaccount',
          Accueil: 'accueil',
        },
      },
    },
  });
}
