import { createStackNavigator } from 'react-navigation'

import LoginPage from './pages/LoginPage'
import SeriesPage from './pages/SeriesPage';

export default createStackNavigator ({
  'Main': {
    screen: SeriesPage
  },
  'Login': {
    screen: LoginPage,
    navigationOptions: {
      title: 'Bem Vindo',
    }
  },
}, {
  navigationOptions: {
    title: 'Series!',
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: '#ca2f37',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30
    }
  }
})