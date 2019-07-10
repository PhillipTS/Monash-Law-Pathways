import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View } from 'react-native';
import * as Font from 'expo-font';
import StartScreen from './Screens/StartScreen';
import HomeScreen from './Screens/HomeScreen';
import ListScreen from './Screens/ListScreen';
import NavBar from './Components/NavBar';
import { BACKGROUND } from './Constants';

import OpenSansFont from './assets/fonts/OpenSans-Regular.ttf';
import Oswald from './assets/fonts/Oswald-Regular.ttf';

const Navigator = createAppContainer(createStackNavigator(
  {
    Start: StartScreen,
    Home: HomeScreen,
    List: ListScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: <NavBar goToHome={() => navigation.popToTop()} />,
      headerStyle: { backgroundColor: BACKGROUND },
    }),
  },
));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontsLoaded: false };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': OpenSansFont,
      oswald: Oswald,
    });

    this.setState({ fontsLoaded: true });
  }

  render() {
    const { fontsLoaded } = this.state;

    if (!fontsLoaded) { return <View />; }

    return <Navigator />;
  }
}

export default App;
