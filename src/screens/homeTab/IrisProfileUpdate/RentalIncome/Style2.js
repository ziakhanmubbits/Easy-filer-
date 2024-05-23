import { StyleSheet } from "react-native";
import { responsiveScreenFontSize, responsiveScreenHeight,responsiveScreenWidth } from 'react-native-responsive-dimensions';
import FontFamily from "../../../../assets/customFonts/customFonts";


const Style = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: "#FFF"
    },
    emlbox: {
      width: responsiveScreenWidth(90),
      marginTop: '4%',
      alignSelf: "center",
    },
    input: {
      width: responsiveScreenWidth(90),
      left: "22%"
    },
    passbox: {
      marginTop: '5%',
      alignSelf: "center",
      flexDirection: "row",
      alignItems: 'center',
    },
    icn: {
      alignItems: "center",
      right: "40%"
    },
    errortxt: {
      color: "red",
      marginLeft: "6%",
      fontFamily: FontFamily.OpenSansBold
    },
    phoneview: {
      height: responsiveScreenHeight(6.5),
      borderWidth: 1,
      width: responsiveScreenWidth(89),
      alignSelf: "center",
      borderRadius: 5,
      borderColor: 'gray',
      marginTop: '5%'
    },
    nbr: {
      paddingVertical: 0.1,
      backgroundColor: "white",
    },
    phoneNumberView: {
      borderWidth: 0.1,
      borderColor: "gray",
      width: responsiveScreenWidth(80),
    },
    addressview: {
      width: responsiveScreenWidth(90.5),
      alignSelf: "center",
      marginTop: '5%'
    },
    btn: {
      backgroundColor: '#EB0414',
      height: responsiveScreenHeight(5),
      width: responsiveScreenWidth(36),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      borderRadius: 5,
      marginLeft: '5%',
      marginTop: "2%"
    },
    plus: {
      fontSize: responsiveScreenFontSize(2.5),
      color: "white",
      fontFamily: FontFamily.OpenSansBold
    },
    textstyl: {
      fontSize: responsiveScreenFontSize(1.9),
      color: "white",
       fontFamily: FontFamily.OpenSansBold
    },
    infoview: {
      // borderWidth:1,
      height: responsiveScreenHeight(13),
      width: responsiveScreenWidth(90),
      marginTop: '2%',
      alignSelf: "center"
    },
    backbtn: {
      backgroundColor: '#0492c2',
      height: responsiveScreenHeight(4),
      width: responsiveScreenWidth(35),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      borderRadius: 5,
    },
    nextbtn: {
      backgroundColor: '#EB0414',
      height: responsiveScreenHeight(4),
      width: responsiveScreenWidth(35),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      borderRadius: 5,
      marginTop: "2%"
    },
    modalView: {
      flex: 1
    },
    modalViewInside: {
      height: responsiveScreenHeight(25),
      width: responsiveScreenWidth(70),
      alignSelf: "center",
      borderRadius: 10,
      marginTop: "70%",
      alignItems: "center",
      backgroundColor: '#FFF',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    txtView: {
      backgroundColor: "#EB0414",
      flexDirection: "row",
      height: responsiveScreenHeight(5),
      width: responsiveScreenWidth(70),
      borderTopStartRadius: 10,
      borderTopEndRadius: 10, alignItems: "center",
      justifyContent: "center"
    },
    textstyle: {
      color: '#FFF',
      fontSize: 16,
       fontFamily: FontFamily.OpenSansBold
    },
    cross: {
      left:"100%"
    },
    crosstextstyle: {
      color: '#FFF',
      fontSize: 20,
       fontFamily: FontFamily.OpenSansBold
    },
    icntxtinput: {
      width: responsiveScreenWidth(60),
      height: responsiveScreenHeight(7),
      marginTop: "2%",
    },
    dropdown: {
      height: responsiveScreenHeight(5),
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 5,
      paddingHorizontal: 5,
      backgroundColor: "gainsboro"
    },
    ibanview:{
      width: responsiveScreenWidth(60),
      marginTop:'2%'
    },
    addbtn:{
      height: responsiveScreenHeight(4),
      width: responsiveScreenWidth(35),
      backgroundColor:"#EB0414",
      borderRadius:5,
      alignItems:"center",
      justifyContent:"center",
      marginTop:"7%"
    },
    modalbtntxt:{
      color:'white',
      fontSize:15,
      fontFamily: FontFamily.OpenSansBold
    },
    listview: {
      flexDirection: 'row',
      justifyContent:"space-between",
      width:responsiveScreenWidth(90),
      marginTop:"3%",
      alignItems:'center'
    }
  })
  export default Style