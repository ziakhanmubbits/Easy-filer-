import { StyleSheet } from "react-native";
import {
    responsiveScreenFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth
} from 'react-native-responsive-dimensions'
import FontFamily from "../../../assets/customFonts/customFonts";


const Style = StyleSheet.create({
    main: {
        flex: 1
    },
    header: {
        height: responsiveScreenHeight(5)
    },
    cntnt: {
        flexGrow: 1
    },
    transbtn: {
        backgroundColor: "#EB0414",
        borderRadius: 50,
        width: responsiveScreenWidth(25),
        height: responsiveScreenHeight(4),
        justifyContent: "center",
        alignItems: "center",
    },
    transtxt: {
        color: "white",
        fontFamily: FontFamily.OpenSansBold
    },
    hdrtxt: {
        fontSize: responsiveScreenFontSize(2.3),
        color: 'black',
        left:'20%',
        fontFamily: FontFamily.OpenSansBold
    },
    uprview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '2%',
    },
    Rs: {
        fontSize: responsiveScreenFontSize(2.6),
        fontFamily: FontFamily.OpenSansBold,
        color: 'black',
        marginLeft: '2%'
    },
    text1: {
        width: responsiveScreenWidth(30),
        height: responsiveScreenHeight(5),
        backgroundColor: 'white',
        borderRadius: 15,
    },
    text12: {
        width: responsiveScreenWidth(30),
        height: responsiveScreenHeight(5),
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent:"center",
        alignItems:"center"
    },
    txtview: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: '3%'
    },
    mainviewinscroll: {
        height: responsiveScreenHeight(16),
        borderBottomWidth: 1,
        backgroundColor: '#EBEBEB'
    },
    text: {
        fontSize: 17,
        alignSelf: 'center',
        fontFamily: FontFamily.OpenSansBold
    },
    text11: {
        fontSize: 25,
        alignSelf: 'center',
        fontFamily: FontFamily.OpenSansBold,
        color:'black'
    },
    v3: {
        borderBottomWidth: 1,
        height: responsiveScreenHeight(15)
    },
    icnview: {
        alignItems: "flex-end",
        marginTop: '10%',
        marginRight: '5%'
    },
     v4: {
        height: responsiveScreenHeight(35)
    },
    chart:{
        alignSelf:"center",
        bottom:"15%",
        right:"20%"
    }

})
export default Style