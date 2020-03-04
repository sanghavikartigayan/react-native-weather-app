import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TableView from './components/TableView';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';
import Firebase from 'firebase';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

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

const App = (props) => {

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  async function loadResourcesAsync() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_Medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
  }

  function handleLoadingError(error) {
    console.warn(error);
  }

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <TableView />
      </View>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    fontFamily: 'Roboto'
  },
});

export default App;