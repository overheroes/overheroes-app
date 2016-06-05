import {StyleSheet} from 'react-native'
import {Fonts, Metrics, Colors} from '../../Themes/'

const RootStyle = StyleSheet.create({
  applicationView: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background
  },
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 5
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.base,
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
})

export const DrawerStyle = {
  main: {
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 15
  },
  drawer: {
    backgroundColor: Colors.slack
  }
}

export default RootStyle
