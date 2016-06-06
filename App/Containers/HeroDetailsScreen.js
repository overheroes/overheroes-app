import React, { PropTypes } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import Routes from '../Navigation/Routes'

// Styles
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

const mapStateToProps = (state) => {
  return {
  }
}

export default HeroDetailsScreen
