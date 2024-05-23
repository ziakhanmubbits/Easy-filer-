import { StyleSheet } from 'react-native';

import {
    responsiveWidth,responsiveHeight, responsiveScreenWidth, responsiveScreenHeight
} from 'react-native-responsive-dimensions'
import FontFamily from '../../../../../../assets/customFonts/customFonts';
import { Fonts } from '../../../../../../assets/Styles/Fonts';
import { scale } from 'react-native-size-matters';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'rgb(255,255,255)'
    },
    text1: {
        color: "black",
        marginTop:responsiveScreenHeight(5),
        fontSize: Fonts.f18,
        fontFamily:FontFamily.OpenSansSemiBold,
        left: "4%"
    },
    text2: {
        color: "black",
        fontSize: Fonts.f16,
        left: "4%",
        marginTop: responsiveScreenHeight(2),
        fontFamily:FontFamily.OpenSansRegular,
    },
    placeholder1: {
        paddingHorizontal: "3%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding: "1%",
        marginLeft: "4%",
        width: responsiveWidth(31),
        borderRadius: 5,
        color: "black",
        fontSize:scale(12),
        fontFamily:FontFamily.OpenSansSemiBold
    },
    placeholder2: {
      paddingHorizontal: "3%",
      borderWidth: 1.5,
      borderColor: "grey",
      padding: "1%",
      marginLeft: "4%",
      width: responsiveWidth(31),
      borderRadius: 5,
      color: "black",
      fontSize:scale(12),
      fontFamily:FontFamily.OpenSansSemiBold
    },
    touchableview: {
        alignItems: "center",
        marginTop: "3%"
    },
    touchable: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "gainsboro",
        width: responsiveWidth(94),
        padding: "2%",
        borderRadius: 3
    },
    touchabletext: {
        color: "black",
        fontFamily:FontFamily.OpenSansMedium,
        fontSize: Fonts.f18,
        marginTop:"1%"
    },
    innerplaceholder1: {
        paddingHorizontal: "2%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding: "0.3%",
        marginTop: "3%",
        width: responsiveWidth(45),
        borderRadius: 5,
        color: "black",
        fontFamily:FontFamily.OpenSansSemiBold
    },
    innerplaceholder2: {
        paddingHorizontal: "2%",
        borderWidth: 1.5,
        marginTop: "3%",
        borderColor: "grey",
        padding: "0.3%",
        marginTop: "1.5%",
        width: responsiveWidth(45),
        borderRadius: 5,
        color: "black",
        fontFamily:FontFamily.OpenSansSemiBold
    },
    touchablebutton: {
        padding: "1%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        width: responsiveWidth(15),
        borderRadius: 5,
        color: "black"
    },
    bottomplaceholder1: {
        borderWidth: 1.5,
        borderColor: "grey",
        padding: "1%",
        width: responsiveWidth(40),
        borderRadius: 5,
        color: "black"
    },
    bottomplaceholder2: {
        borderWidth: 1.5,
        borderColor: "grey",
        padding: "1%",
        marginHorizontal: "2%",
        width: responsiveWidth(35),
        borderRadius: 5,
        color: "black",
        fontFamily:FontFamily.OpenSansSemiBold
    },
    view2: {
        flexDirection: "row",
        marginTop: "2%"
    },
    hiddenview: {
        width: responsiveWidth(100)
    },
    hiddenview1: {
        marginTop: "3%",
        marginLeft: "5%"
    },
    hiddenview1text: {
        color: "black",
        fontSize: Fonts.f18,
        fontFamily:FontFamily.OpenSansMedium,

    },
    hiddenview1text2: {
        color: "black",
        fontSize:Fonts.f16,
        marginTop: "2%",
        fontFamily:FontFamily.OpenSansRegular,
       
    },
    newdisplaytext: {
        color: "black",
        fontFamily:FontFamily.OpenSansRegular,
        left: "3%",
        marginTop: "1%"
    },
    newdisplayview1: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "1%"
    },
    newdisplaytext3: {
        color: "black",
        fontFamily:FontFamily.OpenSansSemiBold
       
    },
    newdisplayview2: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "3%"
    },
    newdisplayview3: {
        flexDirection: "row",
        marginTop: "3%",
        left: "5%"
    },
    
  innerView: {
    height: responsiveHeight(4),
    width: responsiveWidth(100),
    borderBottomWidth: 1,
    borderBottomColor: "#EBE2E2",
    backgroundColor: "#F5F5F5",

  },
  icntxtinput: {
    width: responsiveScreenWidth(25),
    height: responsiveScreenHeight(4),
    marginLeft: "2%",
  },
  dropdown: {
    height:scale(36),
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 5,
    backgroundColor: "white"
  },
  dropdown2: {
    height:scale(38),
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 5,
    backgroundColor: "white"
  },
  icntxtinput2: {
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(5),
    // marginLeft: "2%",
  },
  dropdown2: {
    height: responsiveScreenHeight(5),
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 5,
    backgroundColor: "white"
  },
  loader:{
    minHeight:responsiveHeight(10),
    justifyContent:"center",
    alignItems:"center",
    marginTop:"70%"
  },
    modalmainview:{
      backgroundColor: 'white',
      height: responsiveScreenHeight(17),
      alignItems:"center",
      borderRadius:20,
      width:responsiveScreenWidth(90)
    },
    modalimageview:{
      width:responsiveScreenWidth(12),
      height:responsiveScreenHeight(5),
      marginTop:"5%"
    },
    modalimage:{
      height:"100%",
      width:"100%",
      resizeMode:"center"
    },
    modaltextview:{
      marginTop:"2%"
    },
    modaltext:{
      color:"black",
      fontSize:Fonts.f16,
      fontFamily:FontFamily.OpenSansSemiBold
    },
    modalbuttonview:{
      alignSelf:"flex-end",
      marginRight:"5%"
    },
    modalbutton:{
      backgroundColor:"#EB0414",
      height:responsiveScreenHeight(4),
      width:responsiveScreenWidth(22),
      alignItems:"center",
      justifyContent:"center",
      borderRadius:5,
      marginTop:"4%"
    },
    modalbuttontext:{
      color:"white",
      fontSize:Fonts.f16,
      fontFamily:FontFamily.OpenSansRegular
    },
  screennameview:{
    borderBottomWidth:0.8,
    borderBottomColor:"darkred",
    // marginTop:"3%"
  },
  screennametext:{
    color:"darkred",
    fontSize:Fonts.f17,
    fontFamily:FontFamily.OpenSansSemiBold,
    marginLeft:"2%",
  }




});
export default Style;