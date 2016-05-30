import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
const ROOT_URL = 'https://overwatch-data.herokuapp.com/img/heroes';

class HeroDetails extends Component {

  render() {
    const { hero } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={{uri: `${ROOT_URL}/${hero.picture}`}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.name}>{hero.name}</Text>
            <Text style={styles.class}>{hero.class}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.class}>HP: {hero.hp}</Text>
          <Text style={styles.class}>Armor: {hero.armor}</Text>
          <Text style={styles.class}>Difficulty: {hero.difficulty}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  class: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 106,
    height: 162,
  }
});

export default HeroDetails;
