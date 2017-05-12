import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Ball extends Component {

  componentWillMount() {

      this.position = new Animated.ValueXY(0,0);

    Animated.spring(this.position, {
      toValue: {x: 200, y:420}
    }).start();

  }

  render() {

    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>

    )
  }
}

const styles = {
  ball: {
    backgroundColor: 'black',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: 'red',
    borderWidth: 3
  }
}
export default Ball;
