import { StyleSheet } from 'react-native';
import { COLORS , FONTSIZE } from '../../contains'

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    background : {
        flex : 2
    },
    title : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'flex-start'
    },
    welcome : {
        fontSize : FONTSIZE.welcome,
        color : COLORS.main,
        fontWeight : 'bold'
    }
})

export default styles;