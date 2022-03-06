import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import SignUp from './src/pages/SignUp';
import AddId from './src/pages/AddId';
import Password from './src/pages/Password';

export type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  AddId: undefined;
  Password: undefined;
};

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddId"
          component={AddId}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Password"
          component={Password}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
