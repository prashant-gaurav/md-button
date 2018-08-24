/**
 *
 * @author  Prashant Gaurav
 * @version 1.0
 *
 */
import {StyleSheet} from "react-native";
let CommonStyle = StyleSheet.create({
    buttonSuccess: {
        backgroundColor: 'rgba(53, 188, 0,1)',
        paddingVertical: 10,
        borderRadius: 5,
        color: 'white',
        fontWeight: '200',
        shadowColor: '#000',
        shadowOffset: {width: 1, height:1},
        shadowOpacity: 0.6,
        shadowRadius: 1,
        elevation: 1,
    },
    buttonWarning: {
        backgroundColor: 'rgba(139, 0, 209,1)',
        paddingVertical: 10,
        borderRadius: 5,
        color: 'white',
        fontWeight: '200',
        shadowColor: '#000',
        shadowOffset: {width: 1, height:1},
        shadowOpacity: 0.6,
        shadowRadius: 1,
        elevation: 1,
    },
    buttonError: {
        backgroundColor: 'rgba(216, 0, 0,1)',
        paddingVertical: 10,
        borderRadius: 5,
        color: 'white',
        fontWeight: '200',
        shadowColor: '#000',
        shadowOffset: {width: 1, height:1},
        shadowOpacity: 0.6,
        shadowRadius: 1,
        elevation: 1,
    },
    fabButton: {
        borderWidth: 1,
        borderColor: 'rgba(0,135,195,1)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 8,
        right: 8,
        height: 50,
        width: 50,
        backgroundColor: '#fff',
        borderRadius: 100,
    },
    fabButtonChild: {
        borderWidth: 1,
        borderColor: 'rgba(0,135,195,1)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 10,
        height: 40,
        width: 40,
        borderRadius: 100,
    },
    fabBtnChildPosition1: {
        backgroundColor: 'blue',
        bottom: 68,

    },
    fabBtnChildPosition2: {
        backgroundColor: 'red',
        bottom: 116,
    },
    fabBtnChildPosition3: {
        backgroundColor: 'green',
        bottom: 166,
    },
});
export default CommonStyle;
