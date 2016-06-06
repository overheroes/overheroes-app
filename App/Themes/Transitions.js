import {Navigator} from 'react-native'

const SCREEN_WIDTH = require('Dimensions').get('window').width

// Transitions could be any of those provided by SceneConfigs
// https://github.com/facebook/react-native/blob/master/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
// OR
// Something custom that you've created.

const transitions = {
  default: {
    ...Navigator.SceneConfigs.HorizontalSwipeJump,
    gestures: null
  },
  modal: {
    ...Navigator.SceneConfigs.FloatFromBottom
  },
  back: {
    ...Navigator.SceneConfigs.FloatFromRight,
    gestures: {
      pop: {
        ...Navigator.SceneConfigs.FloatFromRight.gestures.pop,
        edgeHitWidth: SCREEN_WIDTH / 2
      }
    }
  }
}

export default transitions
