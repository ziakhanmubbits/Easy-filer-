import { StyleSheet } from "react-native";
import { responsiveScreenFontSize, 
  responsiveScreenHeight,
   responsiveScreenWidth } from 'react-native-responsive-dimensions'
import FontFamily from "../../../assets/customFonts/customFonts";


const Style = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor:'#FFF'
    },
    contenStyle: {
      flexGrow: 1
    },
    listview: {
      alignSelf: "center",
      alignItems: "center",
    },
    box: {
      width: responsiveScreenWidth(90),
      marginTop: "5%",
      borderColor: "gray",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    },
    box1: {
      width: responsiveScreenWidth(90),
      marginTop: "2%",
      flexDirection:"row"
    },
    vrtxt: {
      fontSize: responsiveScreenFontSize(3),
      fontWeight: "800",
      color: "black",
      marginTop: "1%",
      fontFamily: FontFamily.OpenSansBold
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
      marginTop: "3%",
      alignSelf: "flex-end",
      marginRight: "5%"
    },
    btntxt: {
      color: "white",
      fontSize: 16,
      fontWeight: "600",
      fontFamily: FontFamily.OpenSansBold
    },
    errtxt: {
      color: 'red',
      marginRight: "62%",
      fontFamily: FontFamily.OpenSansBold
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
    icn:{
      right:'150%'
    },
    icn2:{
      right:'95%',
      alignItems:'center',
      justifyContent:"center"
    }
  })
  export default Style