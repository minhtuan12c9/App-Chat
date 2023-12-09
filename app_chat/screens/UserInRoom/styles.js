import { StyleSheet  } from 'react-native';

import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    container : {
      flex : 1,
      paddingHorizontal : 20
    },
    userForm : {
      width : '100%',
      height : 80,
      backgroundColor : COLORS.white,
      paddingHorizontal : 20,
      marginTop : 8,
      borderRadius : 10,
      flexDirection : 'row',
      alignItems : 'center'
    },
    imgUserBox : {
      width : 60,
      height : 60,
      borderRadius : 40,
      marginRight : 20
    },
    imgUser : {
      width : '100%',
      height : '100%',
      borderRadius : 40
    },
    icon : {
      flexDirection : 'row',
      marginTop : 5,
      alignItems : 'center'
    },
    name : {
      fontSize : 20
    },
    online : {
      marginLeft : 8
    }
})

export default styles;