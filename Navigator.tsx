import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Search from './src/screens/Search'

// const client = new ApolloClient()

const navigator = createStackNavigator({
  Search,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigator)