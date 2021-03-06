import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'First App'
    }
  }
);

export default createAppContainer(navigator);
