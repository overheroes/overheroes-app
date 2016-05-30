/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  NavigatorIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import HeroList from './App/Components/HeroList';

const heroes = require('./data/heroes.json');
const ROOT_URL = 'https://overwatch-data.herokuapp.com/img/heroes';

class overwatchapp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Overheroes',
          component: HeroList,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('overwatchapp', () => overwatchapp);
