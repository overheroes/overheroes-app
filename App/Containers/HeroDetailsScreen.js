import React, { PropTypes } from 'react'
import { Image, ScrollView, View, Text } from 'react-native'

import styles from './Styles/HeroDetailsScreenStyle'
const ROOT_URL = 'https://overwatch-data.herokuapp.com/img/heroes'

export default class HeroDetailsScreen extends React.Component {

  constructor (props) {
    super(props)
    console.log(Object.keys(props))
    this.state = {}
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    hero: PropTypes.object.isRequired
  }

  render () {
    const { hero } = this.props

    // TODO extract to method, with big switch case on different ability props
    const abilities = hero.abilities.map(a => {
      const imageUrl = a.image ? `${ROOT_URL}/${a.image}` : ''
      return <View key={a.name} style={styles.ability}>
        <Image
          source={{uri: imageUrl}}
          style={styles.thumbnail}
        />
        <View style={styles.abilityDetails}>
          <Text>{a.name}</Text>
          <Text>{a.damage}</Text>
        </View>
      </View>
    })

    return (
      <ScrollView style={styles.container}>
        <Image
          source={{uri: `${ROOT_URL}/${hero.picture}`}}
          style={styles.image}
        />
        <View style={styles.block}>
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
        </View>
        <View style={styles.block}>
          {abilities}
        </View>
      </ScrollView>
    )
  }
}

export default HeroDetailsScreen
