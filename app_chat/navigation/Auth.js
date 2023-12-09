import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import { SignUpScreen , LoginScreen } from '../screens'

function AuthStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown : false
      }}
    >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default AuthStackScreen;