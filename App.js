import { createStackNavigator } from 'react-navigation';
import StartScreen from './Screens/StartScreen';
import HomeScreen from './Screens/HomeScreen';
import ListScreen from './Screens/ListScreen';

const App = createStackNavigator(
  {
    Start: StartScreen,
    Home: HomeScreen,
    List: ListScreen
  }
);

export default App;
