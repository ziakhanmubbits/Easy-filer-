import { StyleSheet } from "react-native";
import {responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import { Fonts } from "../../../../../src/assets/Styles/Fonts";
import FontFamily from "../../../../assets/customFonts/customFonts";
import colors from "../../../../Utility/colors/colors";
const Style = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "white",
    },
    contentContainer: {
        flexGrow: 1
    },
    Header1: {
        height: responsiveHeight(5)
    },
    txt: {
        color: "white",
        fontFamily: FontFamily.OpenSansBold
    },
    textFailed: {
      alignSelf: 'flex-start',
      color: 'red',
      marginLeft: "5%"
    },
    textFailed1: {
      alignSelf: 'flex-start',
      color: 'red',
      marginLeft: "2%"
    },
    uprbtms: {
        backgroundColor: "#585858",
        height: responsiveHeight(4),
        width: responsiveWidth(30),
        alignItems: "center",
        justifyContent: 'center',
        margin: '1%',
    },
    uprbtnview: {
        flexDirection: "row",
        left: '1%',
        marginTop: '1.3%'
    },
    infoview: {
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "red",
    },
    boxview: {
        alignItems:"center",
        justifyContent:"center"
    },
    box1: {
        width: responsiveScreenWidth(90), // already given 
        marginTop: "10%",
        borderRadius: 5, alignSelf: "center",
    },
    dropdown: {
        height: responsiveScreenHeight(5),
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 5,
        backgroundColor: "gainsboro"
      },
      icntxtinput: {
        width: responsiveScreenWidth(60),
        height: responsiveScreenHeight(7),
        marginTop: "2%",
      },
      txt: {
        color: 'black',
        fontSize: responsiveScreenFontSize(2),
        fontFamily: FontFamily.OpenSansSemiBold, 
        marginTop: "3%"
    },
    txt1: {
        color: 'black',
        fontSize:responsiveScreenFontSize(1.8),
        fontFamily: FontFamily.OpenSansRegular, marginTop: "3%"
    },
    txt2: {
        color: 'black',
        fontSize:  responsiveScreenFontSize(3),
        fontFamily: FontFamily.OpenSansBold
    },
    txt3: {
        color: 'black',
        fontSize:responsiveScreenFontSize(1.9),
        fontFamily: FontFamily.OpenSansRegular
    },
    placeholder1: {
      width: responsiveScreenWidth(90),
      backgroundColor: "white",
      fontSize: responsiveScreenFontSize(2),
      fontFamily: FontFamily.OpenSansLight,
      color: "black"
    },
    placeholder2: {
      borderColor: "black",
      borderWidth: 1
    },
      validText: {
        color: 'green',
      },
      invalidText: {
        color: 'red',
      },
      errorText: {
        color: 'red',
        fontSize: Fonts.f14,
        marginLeft:"5%"
      },
    accinput: {
        flexDirection: 'row',
        alignItems: "center"
      },
      icn: {
        marginLeft: '2%'
      },
      inputrs: {
        width: responsiveWidth(45),
        marginLeft: '2%',
        color: colors.blackColor,
        fontSize:responsiveScreenFontSize(2.1),
        fontFamily:FontFamily.OpenSansRegular
      },
      accview: {
        alignSelf: "center",
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(6.2),
        justifyContent: "center"
      },
      accinput: {
        flexDirection: 'row',
        alignItems: "center",
      },
    CheckBox1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '4%',
        width: responsiveWidth(30)
    },
    checkboxview: {
        flexDirection: "row",
        marginTop: '5%',
    },
    checkboxtxt: {
        color: "black",
        fontSize: responsiveScreenFontSize(1.8)
    },
    CheckBox2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: "10%",
        width: responsiveWidth(30)
    },
    icntxtinput: {
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(6),
        marginTop:"2%"
      },
      dropdown: {
        height: responsiveScreenHeight(6),
        borderColor: colors.blackColor,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 5,
        backgroundColor: "white"
      },
    lastbox: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        width: responsiveWidth(90),
        alignSelf: "center",
        borderColor: "#EBE2E2",
        marginTop: '3%'
    },
    icn: {
        marginRight: "2%",
    },
    boxstyle: {
        backgroundColor: "lightgrey",
        width: responsiveWidth(90),
        color: "white",
        borderWidth: 2,
        borderColor: "black"
    },
    btncon: {
        backgroundColor: "#EB0414",
        width: responsiveWidth(28),
        height: responsiveHeight(6),
        borderRadius: 5, 
        alignItems: "center",
        justifyContent: "center",
        marginTop: '4%',
        marginBottom: "2%"
    },
    lasttxt: {
        color: "white",
        fontFamily: FontFamily.OpenSansRegular,
        fontSize:Fonts.f18
    },
    box1: {
        width: responsiveScreenHeight(80), // already given 
        marginTop: "10%",
        borderRadius: 5,
         alignSelf: "center",
    },
    newYearTax: {
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        borderRadius: 5,
        borderWidth:1,
        borderColor:"black",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%",
        flexDirection:"row"
      },
      btnCtxt1: {
        color: "black",
        fontFamily: FontFamily.OpenSansBold
      },
    dropdowntxt:{
        color: "black"
    },
    loader:{
      minHeight:responsiveHeight(10),
      justifyContent:"center",
      alignItems:"center",
      marginTop:"70%"
    }
})
export default Style