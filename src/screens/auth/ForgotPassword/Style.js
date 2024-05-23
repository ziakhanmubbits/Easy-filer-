import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import FontFamily from "../../../assets/customFonts/customFonts";
import { Fonts } from "../../../assets/Styles/Fonts";



const Style = StyleSheet.create({
    mian: {
        flex: 1,
        backgroundColor:'#FFF'
    },
    scrollview: {
        flexGrow: 1
    },
    vrtxt: {
        fontSize: responsiveScreenFontSize(2.5),
        fontFamily: FontFamily.MONTSERRAT_Regular,
        color: "black",
    },
    intro: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: "10%"
    },
    placeholder1: {
        paddingHorizontal:"3%",
        marginTop:"4%",
        borderWidth: 1,
        borderColor: "black",
        padding:"1%",
        width: responsiveWidth(90),
        height:responsiveHeight(7),
        borderRadius: 5,
        color:"black"
    },
    otpfield: {
        height: responsiveScreenHeight(5.5),
        width: responsiveScreenWidth(90),
        marginTop: '5%'
    },
    btn: {
        height: responsiveScreenHeight(5.5),
        width: responsiveScreenWidth(30),
        backgroundColor: "#EB0414",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#EB0414",
        alignSelf: "flex-end",
        marginRight: responsiveScreenWidth(5)
    },
    btntxt: {
        color: "white",
        fontSize: 16,
        fontFamily: FontFamily.OpenSansBold
    },
    textFailed: {
        alignSelf: 'flex-start',
        color: 'red',
    },
    txterremail: {
        color: 'red',
        marginLeft: "6%",
        fonts:Fonts.f16,
        marginTop:"5.5%",
        fontFamily: FontFamily.OpenSansMedium
    },
    modalmainview:{
        backgroundColor: 'white',
         height: responsiveScreenHeight(30),
         alignItems:"center",
         borderRadius:5,
         width:responsiveScreenWidth(90)
      },
      modaltext:{
        color:"black",
        fontSize:responsiveScreenFontSize(2.5),
        fontFamily:FontFamily.OpenSansSemiBold
      },
      modalbuttonview:{
        alignSelf:"center",
        marginTop:responsiveScreenHeight(2)
     
      },
      modalbutton:{
        backgroundColor:"#EB0414",
        height:responsiveScreenHeight(4),
        width:responsiveScreenWidth(30),
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        marginTop:"4%"
      },
      modalbuttontext:{
        color:"white",
        fontSize:Fonts.f16,
        alignItems:"center",
        fontFamily:FontFamily.OpenSansRegular
      },
      otpview:{
        width:responsiveScreenWidth(90),
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginTop:responsiveScreenHeight(2)
      },
      inputview:{
        width:responsiveScreenWidth(10),
        height:responsiveScreenHeight(5),
        borderWidth:0.5,
        borderRadius:10,
        color:"black",
        textAlign:"center",
        marginLeft:responsiveScreenWidth(2)
      },
      loader: {
        minHeight: responsiveHeight(10),
        // height:responsiveScreenHeight(20),
        minWidth: responsiveScreenWidth(20),
        // marginTop:responsiveScreenHeight(30)
      },
})
export default Style