import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
//import Signup from './Signup'; 
//import Mail from './Mail';
//import Verification from './Verification';
//import ResetPassword from './ResetPassword';
import Logo from './Logo'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
