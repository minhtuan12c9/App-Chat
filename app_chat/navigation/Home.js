import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../contains'
import { HomeScreen } from '../screens';
import styles from '../screens/Home/styles';

const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerTintColor: COLORS.white,
            headerStyle: {
                backgroundColor: COLORS.main,
            },
            headerTitle: '20CT3 ROOM CHAT APP',
            headerTitleAlign: 'center',
        }}>
        <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeStackScreen;