import React from 'react'
import RoutesNavigation from './Routes';
import { AuthProvider } from './AuthProvider';
import FlashMessage from 'react-native-flash-message';

function MyNavigation() {
  return (
    <AuthProvider>
        <RoutesNavigation/>
        <FlashMessage position="top" />
    </AuthProvider>
  )
}

export default MyNavigation;