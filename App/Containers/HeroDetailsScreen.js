import React, { PropTypes } from 'react'
import { ScrollView, Text } from 'react-native'

import styles from './Styles/HeroDetailsScreenStyle'

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
    return (
      <ScrollView style={styles.container}>
        <Text>HeroDetailsScreen Container</Text>
        <Text>{this.props.hero.name}</Text>
      </ScrollView>
    )
  }
}

export default HeroDetailsScreen
