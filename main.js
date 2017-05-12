import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './src/Deck'
import DATA from './src/DeckData.json';
import { Card } from 'react-native-elements';

class App extends React.Component {

  renderCard (item) {
    return (
      <Card title={item.text}>

      </Card>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Deck data={DATA} renderCard={this.renderCard} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});

Expo.registerRootComponent(App);
