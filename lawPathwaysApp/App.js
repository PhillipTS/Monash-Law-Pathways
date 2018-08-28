import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import ListScreen from './Screens/ListScreen';

const App = createStackNavigator({
  Home: HomeScreen,
  List: ListScreen
});

export default App;
