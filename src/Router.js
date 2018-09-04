import { createStackNavigator } from 'react-navigation'

import LoginPage from './pages/LoginPage'
import SerieFormPage from './pages/SerieFormPage'
import SeriesPage from './pages/SeriesPage';
import SerieDetailPage from './pages/SerieDetailPage';

export default createStackNavigator ({
  'Login': {
    screen: LoginPage,
    navigationOptions: {
      title: 'Bem Vindo',
    }
  },
  'Main': {
    screen: SeriesPage
  },
  'SerieForm': {
    screen: SerieFormPage,
    navigationOptions: {
      title: 'Nova serie',
    }
  },
  'SerieDetail': {
    screen: SerieDetailPage,
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params
      return {
        title: serie.title,
      }
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