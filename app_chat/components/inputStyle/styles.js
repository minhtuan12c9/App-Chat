import { StyleSheet } from 'react-native';

import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    textInputLabel : {
        color : COLORS.title,
    },
    textInput: {
        marginTop : 10,
        height: 40,
        borderColor: COLORS.title,
        borderWidth : 1,
        borderRadius : 10,
        paddingLeft : 10,
    },
    iconShowPass : {
      position : 'absolute',
      right : 10,
      bottom : 10
    }
})

export default styles;