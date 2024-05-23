import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import FontFamily from "../../../assets/customFonts/customFonts";



const Style = StyleSheet.create({
    mian: {
        flex: 1,
        backgroundColor:'#FFF'
    },
    scrollview: {
        flexGrow: 1
    },
    picturestyle: {
        height: responsiveScreenHeight(15),
        width: responsiveScreenWidth(20)
    },
    vrtxt: {
        fontSize: responsiveScreenFontSize(3),
        fontFamily: FontFamily.MONTSERRAT_Regular,
        color: "black",
    },
    intro: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: "10%"
    },
    otpfield: {
        width: responsiveScreenWidth(90),
        marginTop: '5%'
    },
    placeholder1: {
        paddingHorizontal:"3%",
        // marginTop:"4%",
        borderWidth: 1,
        borderColor: "black",
        padding:"1%",
        width: responsiveWidth(90),
        height:responsiveHeight(7),
        borderRadius: 5,
        color:"black"
    },
    btn: {
        height: responsiveScreenHeight(5.5),
        width: responsiveScreenWidth(40),
        backgroundColor: "#EB0414",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#EB0414",
        marginTop: "4%",
        alignSelf: "flex-end",
        marginRight: "5%"
    },
    btntxt: {
        color: "white",
        fontSize: 16,
        fontFamily: FontFamily.OpenSansBold
    },
    erropttext: {
        color: 'red',
        marginLeft: "7%",
        marginTop:"1%",
        fontFamily: FontFamily.OpenSansBold
    }
})
export default Style