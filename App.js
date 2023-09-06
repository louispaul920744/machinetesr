
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Detail from './Detail';


import LoginScreen from './login';
const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
<NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

