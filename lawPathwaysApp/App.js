import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';

const App = createStackNavigator({
  Home: HomeScreen
});

export default App;
