import { useNavigation, useFocusEffect } from '@react-navigation/native'
import React from 'react'
import { View, Text, StatusBar, FlatList, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import { useCallback } from 'react'
import { userModel } from '../../model'

let data = [
  { id: 1, name: 'Lập trình Web', img: require('../../assets/images/1.jpg') },
  { id: 2, name: 'Lập trình Android', img: require('../../assets/images/2.png') },
  { id: 3, name: 'Lập trình IOS', img: require('../../assets/images/3.jpg') },
  { id: 4, name: 'Công nghệ phần mềm', img: require('../../assets/images/4.png') },
  { id: 5, name: 'Công nghệ Web', img: require('../../assets/images/5.png') },
]

const RoomScreen = () => {
  const navigation = useNavigation()

  useFocusEffect(
    useCallback(() => {
      const result = userModel.disconnect()
      return () => {
        result
      }
    }, [])
  );

  const goChatRoom = (item) => {
    navigation.navigate('ChatScreen', {
      id: item.id,
      name: item.name
    })
  }

  const showItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => goChatRoom(item)} style={styles.roomContainer}>
        <View style={styles.roomBox}>
          <View style={styles.boxImg}>
            <Image style={styles.img} source={item.img} />
          </View>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <>
      <StatusBar hidden={true} />
      <FlatList
        data={data}
        numColumns={2}
        renderItem={showItem}
        key={(item) => item.id.toString()}
      />
    </>
  )
}

export default RoomScreen
