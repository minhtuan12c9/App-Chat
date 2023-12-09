import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../contains'
import { ChatScreen, RoomScreen, UserInRoomScreen } from '../screens'
import { IconStyle } from '../components'
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const RoomStackScreen = () => {
  const navigation = useNavigation()

  const goHome = () => {
    navigation.navigate('Home')
  }

  const goInfo = () => {
    navigation.navigate('Info')
  }

  const goUserInRoom = (roomName) => {
    navigation.navigate('UserInRoomScreen', {
      roomName,
    })
  }

  return (
    <Stack.Navigator
      initialRouteName={'RoomScreen'}
      screenOptions={{
        headerTintColor: COLORS.white,
        headerStyle: {
          backgroundColor: COLORS.main,
        },
        title: '20CT3 ROOM CHAT',
        headerTitleAlign: 'center',
      }
      }
    >
      <Stack.Screen name="RoomScreen" component={RoomScreen} options={{
        headerLeft: () => { return <IconStyle name={'home'} onPress={goHome} /> },
        headerRight: () => { return <IconStyle name={'info'} onPress={goInfo} /> }
      }} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} options={({ route }) => ({
        title: route.params.name,
        headerRight: () => { return <IconStyle name={'userInRoom'} onPress={() => goUserInRoom({ roomName: `${route.params.name}-${route.params.id}` })} /> }
      })} />
      <Stack.Screen name="UserInRoomScreen" component={UserInRoomScreen} options={({ route }) => ({
        title: 'Users',
      }
      )} />
    </Stack.Navigator>
  );
}

export default RoomStackScreen;