import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomePage from './components/HomePage';
import ListView from './components/ListView';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';
import Firebase from 'firebase';
import { ThemeProvider } from 'react-native-elements';
import Colors from './assets/utils';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const theme = {
  colors: {
    primary: Colors.primary,
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));

var firebaseConfig = {
  apiKey: "AIzaSyAmRvNNlsqzQvVfZZ1U5sfV3cWbZXx01FY",
  authDomain: "react-native-austinweatherapp.firebaseapp.com",
  databaseURL: "https://react-native-austinweatherapp.firebaseio.com",
  projectId: "react-native-austinweatherapp",
  storageBucket: "react-native-austinweatherapp.appspot.com",
  messagingSenderId: "457206269182",
  appId: "1:457206269182:web:c1c8280ec82ccf385791af",
  measurementId: "G-63PLMCVWV5"
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();

const Stack = createStackNavigator();

function App() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme} >
          <NavigationContainer>
          <Stack.Navigator intialRouteName="Home">
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="DateLists" component={ListView} />
          </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
    </Provider>
    );
}

export default App;