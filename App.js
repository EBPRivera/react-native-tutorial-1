import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ExerciseScreen from './src/screens/ExerciseScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import CounterScreen_AfterReducer from './src/screens/CounterScreen_AfterReducer'
import TextScreen from './src/screens/TextScreen'
import BoxScreen from './src/screens/BoxScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen, // Button
    Components: ComponentScreen, // Basics
    Exercise: ExerciseScreen,
    List: ListScreen, // Lists
    Image: ImageScreen, // Components
    Counter: CounterScreen, // State
    Color: ColorScreen, // More State
    Square: SquareScreen, // Reducer
    ReducerExercise: CounterScreen_AfterReducer,
    Text: TextScreen, // Text
    Box: BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
