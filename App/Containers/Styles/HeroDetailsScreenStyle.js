import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  block: {
    margin: 20,
    marginBottom: 2,
    paddingBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  ability: {
    height: 40,
    margin: 5,
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  abilityDetails: {
    flex: 1,
    alignItems: 'center'
  },
  thumbnail: {
    borderRadius: 5,
    width: 53,
    // height: 81,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'black'
  },
  heading: {
    position: 'relative',
    height: 15
  },
  title: {
    position: 'absolute',
    marginTop: -40,
    marginLeft: 20
  },
  name: {
    color: '#fff',
    backgroundColor: '#35415c',
    fontSize: 30,
    fontWeight: '700',
    fontStyle: 'italic',
    paddingTop: 5,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 5,
    borderRadius: 2
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  details: {
    padding: 20
  },
  image: {
    resizeMode: 'cover',
    height: 160,
    backgroundColor: 'white'
  },
  class: {
    textAlign: 'center'
  },
  desc: {
    fontSize: 18,
    color: '#656565'
  }
})
