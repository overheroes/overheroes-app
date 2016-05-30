import React, { Component } from 'react';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import HeroDetails from './HeroDetails';

const heroes = require('../../data/heroes.json');
const ROOT_URL = 'https://overwatch-data.herokuapp.com/img/heroes';

class HeroList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(heroes),
      loaded: true
    });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderHero.bind(this)}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading ...
        </Text>
      </View>
    );
  }

  renderHero(hero, sectionId, rowId) {
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowId, hero)}>
        <View style={styles.container}>
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
    );
  }

  _pressRow(rowId, hero) {
    console.log(`Pressed on ${rowId} with hero: `, hero);
    this.props.navigator.push({
      title: hero.name,
      component: HeroDetails,
      passProps: { hero }
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

export default HeroList;
