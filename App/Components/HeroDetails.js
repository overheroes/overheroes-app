import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
const ROOT_URL = 'https://overwatch-data.herokuapp.com/img/heroes';

class HeroDetails extends Component {

  render() {
    const { hero } = this.props;

    // TODO extract to method, with big switch case on different ability props
    const abilities = hero.abilities.map(a => {
      const imageUrl = a.image ? `${ROOT_URL}/${a.image}` : '';
      return <View key={a.name} style={styles.ability}>
        <Image
          source={{uri: imageUrl}}
          style={styles.thumbnail}
        />
      <View style={styles.abilityDetails}>
          <Text>{a.name}</Text>
          <Text>{a.damage}</Text>
        </View>
      </View>;
    });

    return (
      <ScrollView style={styles.container}>
        <View style={styles.block}>
          <Image
            source={{uri: `${ROOT_URL}/${hero.picture}`}}
            style={styles.image}
          />
          <View style={styles.heading}>
              <View style={styles.title}>
                <Text style={styles.name}>{hero.name}</Text>
              </View>
          </View>
          <View style={styles.details}>
            <Text style={styles.desc}>HP: {hero.hp}</Text>
            <Text style={styles.desc}>Armor: {hero.armor}</Text>
            <Text style={styles.desc}>Difficulty: {hero.difficulty}</Text>
          </View>
          {abilities}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0'
  },
  block: {
    margin: 20,
    backgroundColor: '#FFF'
  },
  ability: {
    height: 40,
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  abilityDetails: {
    flex: 1,
    alignItems: 'center'
  },
  thumbnail: {
    borderRadius: 5,
    width: 53,
    //height: 81,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'black',
  },
  heading: {
    position: 'relative',
    height: 25,
    //backgroundColor: '#CCD1D7'
  },
  title: {
    position: 'absolute',
    marginTop: -30,
    marginLeft: 10
  },
  name: {
    color: '#fff',
    backgroundColor: '#35415c',
    fontSize: 30,
    fontWeight: '700',
    fontStyle: 'italic',
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    borderRadius: 2
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  details: {
    padding: 20,
  },
  image: {
    resizeMode: 'cover',
    height: 200
  },
  class: {
    textAlign: 'center',
  },
  desc: {
    fontSize: 18,
    color: '#656565'
  }
});

export default HeroDetails;
