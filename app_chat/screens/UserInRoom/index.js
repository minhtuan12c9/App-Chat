import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, FlatList } from 'react-native';
import styles from './styles'
import { IconStyle } from '../../components'
import { useRoute } from '@react-navigation/native';
import { userModel } from '../../model';

const data = [
  { id: 1, name: 'Kiru', img: require('../../assets/images/backgroundFooter.png') },
  { id: 2, name: 'Admin', img: require('../../assets/images/backgroundFooter.png') }
]

const UserInRoomScreen = () => {

  const route = useRoute()
  const [data, setData] = useState([])
  const isStart = useRef(true)

  useLayoutEffect(() => {
    if (isStart.current) {
      userModel.listUserOnl(route.params.roomName, (value) => setData(value));
    };
    return () => {
      isStart.current = false;
    };
  }, []);

  const showUser = ({ item }) => {
    return (
      <View style={styles.userForm}>
        <View style={styles.imgUserBox}>
          <Image style={styles.imgUser} source={item.img} />
        </View>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.icon}>
            <IconStyle name={"online-prediction"} />
            <Text style={styles.online}>online</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={showUser}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  );
}

export default UserInRoomScreen
