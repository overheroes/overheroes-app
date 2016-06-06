import React, { PropTypes } from 'react'
import { Image, ListView, ScrollView, Text, TouchableHighlight, View } from 'react-native'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'

// Styles
import styles from './Styles/HeroesListScreenStyle'

const ROOT_URL = 'https://overwatch-data.herokuapp.com/img/heroes'
const heroes = require('../Fixtures/data.json')

export default class HeroesListScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    }
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  componentWillMount () {
    this.props.navigator.state.tapHamburger = () => {
      this.props.navigator.drawer.toggle()
    }
    this.fetchData()
  }

  fetchData () {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(heroes),
      loaded: true
    })
  }

  render () {
    if (!this.state.loaded) {
      return this.renderLoadingView()
    }

    return (
      // TODO map in scroll view?
      <ListView style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderHero.bind(this)}
      />
    )
  }

  renderLoadingView () {
    return (
      <ScrollView style={styles.container}>
        <Text>
          Loading ...
        </Text>
      </ScrollView>
    )
  }

  renderHero (hero, sectionId, rowId) {
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowId, hero)}>
        <View style={styles.row}>
          <Image
            source={{uri: `${ROOT_URL}/${hero.picture}`}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.name}>{hero.name}</Text>
            <Text style={styles.class}>{hero.class}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  _pressRow (rowId, hero) {
    // console.log(`Pressed on ${rowId} with hero: `, hero)
    this.props.navigator.push(Routes.computeHeroDetailsScreen(hero))
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(HeroesListScreen)
