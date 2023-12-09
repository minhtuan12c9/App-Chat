import { StyleSheet } from 'react-native';
import { COLORS , FONTSIZE } from '../../contains'

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    info : {
        flex : 1,
        backgroundColor : COLORS.main,
        borderBottomRightRadius : 120,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
        alignItems : 'center',
        justifyContent : 'center'
    },
    body : {
        flex : 1,
        paddingHorizontal : 30,
        paddingTop : 30,
    },
    infoBox : {
        width : 150,
        height : 150,
        backgroundColor : 'white',
        borderRadius : 100
    },
    infoName : {
        fontSize : FONTSIZE.infoName,
        fontWeight : 'bold',
        color : 'white',
        marginTop : 10
    },
    infoBoxImg : {
        borderRadius : 100,
        width : '100%',
        height : '100%',
    },
    iconAvatar : {
        position : 'absolute',
        bottom : 6,
        right : 6,
        borderWidth : 1,
        borderColor : COLORS.white,
        borderRadius : 20,
        padding : 3,
        backgroundColor : COLORS.black
    },
    infoTitle : {
        paddingVertical : 5,
        paddingHorizontal : 15,
        borderWidth : 1,
        borderColor : COLORS.white,
        borderRadius : 10,
        position : 'absolute',
        bottom : 15 , 
        left : 20
    },
    infoTitleText : {
        color : COLORS.white,
        fontWeight : 'bold',
        fontSize : 16
    },
    infoIcon : {
        position : 'absolute',
        bottom : 15,
        right : 100
    },
    formTitle : {
        fontSize : 36,
        fontWeight : 'bold',
        position : 'absolute',
        left : 20,
        color : COLORS.title
    },
        formInput : {
        marginTop : 30,
    },
    textInput: {
        marginTop : 10,
        height: 40,
        borderColor: COLORS.title,
        borderWidth : 1,
        borderRadius : 10,
        paddingLeft : 10,
    },
    textInputLabel : {
        color : COLORS.title,
      },
    changePass : {
        position : 'absolute',
        right  : 0,
        borderWidth : 1,
        paddingHorizontal : 3,
        borderRadius : 10,
        backgroundColor : COLORS.main,
        borderColor : COLORS.white
    },
    changePassText : {
        fontSize : 12,
        color : COLORS.white
    }

})

export default styles;