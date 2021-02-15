import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';

const Stack = createStackNavigator();

// In case of production USE ENV variables
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa3aIHvK6KRlSUX-Sa0QFiemk4to6Gdqw",
  authDomain: "instagram-clone-afc6b.firebaseapp.com",
  projectId: "instagram-clone-afc6b",
  storageBucket: "instagram-clone-afc6b.appspot.com",
  messagingSenderId: "572464413092",
  appId: "1:572464413092:web:a5ba2cf7b2dcae4ab3e931",
  measurementId: "G-NYPER8F8D3"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
};





export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false, 
    }
  }

  //refactor useEffect?
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({ 
          loggedIn :false,
          loaded: true,  
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }

    })
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if(!loaded){
      return(
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <Text>Loading...</Text>
        </View>
      )
    }

    if(!loggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={ { headerShown: false} }/>
            <Stack.Screen name="Register" component={RegisterScreen} options={ { headerShown: false} }/>
            </Stack.Navigator>
        </NavigationContainer>
      )
    }
     
    return(
      <View style={{ flex: 1, justifyContent: 'center'}}>
        <Text>User is loggedd in</Text>
      </View>
    )
  }
}

export default App




