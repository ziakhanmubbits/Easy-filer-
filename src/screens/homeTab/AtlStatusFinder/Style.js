import { StyleSheet } from "react-native";
import {
    responsiveHeight,
    responsiveScreenFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
} from 'react-native-responsive-dimensions'
import FontFamily from "../../../assets/customFonts/customFonts";
const Style = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "white"
    },
    contentContainer: {
        flexGrow: 1
    },
    innerView: {
        height: responsiveHeight(7),
        width: responsiveWidth(100),
        borderBottomWidth: 1,
        borderBottomColor: "#EBE2E2",
        backgroundColor: "#F5F5F5",
        flexDirection: "row"
      },
      imageview:{
        height: responsiveHeight(7),
        width: responsiveWidth(14),
      },
    img: {
        height:"100%",
        width:"100%",
        resizeMode:"center"
    },
    txtheder: {
        fontSize: responsiveScreenFontSize(2.2),
        color: "black",
        textAlign:"center",
        fontFamily:FontFamily.MONTSERRAT_Medium,
        marginTop: responsiveScreenHeight(5)
    },
    txttop: {
        color: "black",
        fontSize: responsiveScreenFontSize(1.8),
        marginTop: responsiveScreenHeight(1),
        textAlign:"center",
        fontFamily: FontFamily.MONTSERRAT_Regular

    },
    txttop2: {
        color: "black",
        fontSize: responsiveScreenFontSize(1.8),
        textAlign:"center",
        fontFamily: FontFamily.OpenSansSemiBold

    },
    txttop1: {
        color: "black",
        fontSize: 15,
        marginTop: "5%",
        fontFamily: FontFamily.OpenSansBold
    },
    v1: {
        alignItems: "center",
        marginTop: "10%",
    },
    search: {
        alignSelf: 'center',
        justifyContent:"center",
        alignItems:"center",
        marginTop: '5%',
        width: responsiveWidth(90)
    },
    searchbar: {
        borderWidth: 1,
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        borderRadius: 5,
        borderColor: "darkgrey"
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
    txt: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 15,
        fontFamily: FontFamily.OpenSansBold
    },
    txtView:{
        marginTop:'2%',
        alignItems:"center"
      },
    texterror:{
        color:"red",
        marginLeft:"6%",
        fontFamily: FontFamily.OpenSansRegular,
        fontSize:responsiveScreenFontSize(2)
    },
    txtButton:{
        backgroundColor:"red",
        height:responsiveHeight(7),
        width:responsiveWidth(30),
        justifyContent:"center",
        alignItems:"center",
        borderRadius:6
      },
      loader:{
        minHeight:responsiveHeight(10),
        justifyContent:"center",
        alignItems:"center",
        // marginTop:"70%"
      },
      placeholder1: {
        width: responsiveScreenWidth(80),
        backgroundColor: "white",
        fontSize: responsiveScreenFontSize(2),
        fontFamily: FontFamily.OpenSansLight,
        color: "black"
      },
      placeholder2: {
        borderColor: "black",
        borderWidth: 1
      },
})
export default Style