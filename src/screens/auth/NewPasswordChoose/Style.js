import { StyleSheet } from "react-native";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import FontFamily from "../../../assets/customFonts/customFonts";



const Style = StyleSheet.create({
    main: {
      flex: 1
    },
    contenStyle: {
      flexGrow: 1
    },
    listview: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: '7%'
    },
    box: {
      width: responsiveScreenWidth(90),
      marginTop: "10%",
      borderColor: "gray",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    },
    box1: {
      height: responsiveScreenHeight(5.5),
      borderWidth: 1,
      width: responsiveScreenWidth(90),
      marginTop: "2%",
      backgroundColor: "#EBE2E2",
      borderRadius: 5,
      borderColor: "gray",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    },
    vrtxt: {
      fontSize: responsiveScreenFontSize(3),
       fontFamily: FontFamily.OpenSansBold,
      color: "black",
      marginTop: "1%"
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
      marginTop: "5%",
      alignSelf: "flex-end",
      marginRight: "5%"
    },
    btntxt: {
      color: "white",
      fontSize: 16,
       fontFamily: FontFamily.OpenSansBold
    },
    errtxt: {
      color: 'red',
      marginRight: "62%"
    },
    txtinput:{
      right:"20%"
    }
  })
  export default Style