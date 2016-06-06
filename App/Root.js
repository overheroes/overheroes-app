import React from 'react'
import { View, Text, Navigator, StatusBar } from 'react-native'
import {Router, Routes, NavigationBar} from './Navigation/'
import configureStore from './Store/Store'
import { Provider } from 'react-redux'
import Actions from './Actions/Creators'
import Drawer from 'react-native-drawer'
import DebugSettings from './Config/DebugSettings'
import './Config/PushConfig'

// Styles
import styles, { DrawerStyle } from './Containers/Styles/RootStyle'

const store = configureStore()

export default class RNBase extends React.Component {

  componentWillMount () {
    const { dispatch } = store
    dispatch(Actions.startup())
  }

  componentDidMount () {
    this.navigator.drawer = this.drawer
  }

  renderDrawerContent () {
    // TODO extract and style the drawer
    return (
      <View style={{padding: 23, backgroundColor: '#3b5998'}}>
        <Text style={{color: 'white'}}>
          Overheroes
        </Text>
      </View>
    )
  }

  renderApp () {
    console.disableYellowBox = !DebugSettings.yellowBox
    return (
      <Provider store={store}>
        <View style={styles.applicationView}>
          <StatusBar
            barStyle='light-content'
          />

          <Drawer
            ref={(ref) => { this.drawer = ref }}
            content={this.renderDrawerContent()}
            styles={DrawerStyle}
            openDrawerOffset={100}
            tweenHandler={Drawer.tweenPresets.parallax}
            type='static'
            tapToClose
          >
            <Navigator
              ref={(ref) => { this.navigator = ref }}
              initialRoute={Routes.HeroesListScreen}
              configureScene={Router.configureScene}
              renderScene={Router.renderScene}
              navigationBar={NavigationBar.render()}
              style={styles.container}
            />
          </Drawer>
        </View>
      </Provider>
    )
  }

  render () {
    return this.renderApp()
  }
}
