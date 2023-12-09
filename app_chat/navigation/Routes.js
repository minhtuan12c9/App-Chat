import React, { useContext, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../contains'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

import HomeStackScreen from './Home'
import InfoStackScreen from './Info'
import RoomStackScreen from './Room'
import AuthStackScreen from './Auth';

import { AuthContext } from './AuthProvider';

function RoutesNavigation() {
    const {user} = useContext(AuthContext)
  return ( 
    user ? (
        <Tab.Navigator
            initialRouteName={'HomeTab'}
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                case 'HomeTab':
                    iconName = focused ? 'ios-home' : 'ios-home-outline'
                    break;
                case 'RoomChatTab':
                    iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'
                    break;
                case 'InfoTab':
                    iconName = focused ? 'ios-person' : 'ios-person-outline'
                    break;
                default:
                    break;
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: COLORS.white,
            tabBarInactiveTintColor: COLORS.white,
            tabBarStyle : {
                backgroundColor : COLORS.main,
                height : 65,
                paddingBottom : 10
            },
            tabBarLabelStyle : {
                fontSize : 15,
                color : COLORS.white,
            },
            headerShown : false
            })}
            >
                <Tab.Screen name='HomeTab' component={HomeStackScreen} options={{title: 'Trang chủ'}} />
                <Tab.Screen name='RoomChatTab' component={RoomStackScreen} options={{title: 'Phòng chat', tabBarStyle: {display: 'none'}}} />
                <Tab.Screen name='InfoTab' component={InfoStackScreen} options={{title: 'Thông tin'}} />
        </Tab.Navigator>
    ) : (
        <AuthStackScreen/>
    )
    
  )
}

export default RoutesNavigation;