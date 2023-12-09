import { View, Text } from 'react-native'
import React from 'react'

import styles from './styles'
import { SvgComponent } from '../../components'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.background}>
            <SvgComponent />
        </View>
        <View style={styles.title}>
            <Text style={styles.welcome}>WELCOME</Text>
            <Text style={styles.welcome}>20CT3</Text>
        </View>
    </View>
  )
}

export default HomeScreen;