/*
  ______      __                 __     _____                                   
 /_  __/_  __/ /__  _____       / /    / ___/      _____  ___  ____  ___  __  __
  / / / / / / / _ \/ ___/  __  / /     \__ \ | /| / / _ \/ _ \/ __ \/ _ \/ / / /
 / / / /_/ / /  __/ /     / /_/ /     ___/ / |/ |/ /  __/  __/ / / /  __/ /_/ / 
/_/  \__, /_/\___/_/      \____(_)   /____/|__/|__/\___/\___/_/ /_/\___/\__, /  
    /____/                                                             /____/ 

*/

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAAi9JnKQ33MEDAF8tHh1nwmz4S6-YEf4s',
        authDomain: 'authorization-4ab94.firebaseapp.com',
        databaseURL: 'https://authorization-4ab94.firebaseio.com',
        projectId: 'authorization-4ab94',
        storageBucket: 'authorization-4ab94.appspot.com',
        messagingSenderId: '728944757776'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
          </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
