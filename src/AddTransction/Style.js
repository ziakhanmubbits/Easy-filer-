import { StyleSheet } from "react-native";
import { responsiveHeight,responsiveScreenHeight } from 'react-native-responsive-dimensions'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import FontFamily from "../assets/customFonts/customFonts";



const Style = StyleSheet.create({
    main: {
        flex: 1,
    },
    cntnt: {
        flexGrow: 1
    },
    headr: {
        flexDirection: "row",
        height: responsiveHeight(5),
        backgroundColor:'#EB0414',
        alignItems:"center"
    },
    hdrtxt: {
        color: "white",
        marginLeft: "20%",
        fontSize: 20,
        fontFamily: FontFamily.OpenSansBold,
        marginBottom:'3%'
    },
    icn: {
        marginLeft: "7%",
        marginBottom:'3%'
    },
    incometab: {
        backgroundColor: "#EB0414",
        height: responsiveHeight(4),
        width: responsiveWidth(25),
        borderRadius: 50,
        justifyContent:"center",
        alignItems:"center",
        margin:10,
        left:"40%"
    },
    font:{
        color:"white",
        fontFamily: FontFamily.OpenSansBold
    },
    txtinput:{
          width: responsiveWidth(80),
          height: responsiveHeight(5),
          borderWidth:1,
          borderColor:"red",
          alignSelf:"center"
    }
    ,
    uprview1: {
        backgroundColor: 'white',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        height: responsiveScreenHeight(100),
    },
})
export default Style