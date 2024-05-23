import {StyleSheet} from 'react-native';
import React from 'react';
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth
  } from 'react-native-responsive-dimensions'
import { Fonts } from '../../../../../assets/Styles/Fonts';
import FontFamily from '../../../../../assets/customFonts/customFonts';

const Style = StyleSheet.create({
    container:{
      flex: 1,
      alignItems:"center",
      marginTop:"10%"
    },
    input: {
        width: responsiveWidth(85),
        height: responsiveHeight(6),
        alignSelf: "center",
        alignItems: "center",
        marginTop: "5%",
      },
      dropdown: {
        height: 55,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width:responsiveWidth(80)
      },
      placeholder1: {
        paddingHorizontal:"3%",
        marginTop:"4%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding:"1%",
        width: responsiveWidth(90),
        borderRadius: 5,
        color:"black"
    },
    icntxtinput: {
      width: responsiveScreenWidth(90),
      height: responsiveScreenHeight(4),
    },
    dropdown: {
      height: responsiveScreenHeight(6),
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 5,
      paddingHorizontal: 5,
      backgroundColor: "white"
    },
    icntxtinput2: {
      width: responsiveScreenWidth(90),
      height: responsiveScreenHeight(5),
    },
    dropdown2: {
      height: responsiveScreenHeight(5),
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 5,
      paddingHorizontal: 5,
      backgroundColor: "gainsboro"
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loader:{
      minHeight:responsiveHeight(10),
      justifyContent:"center",
      alignItems:"center",
      marginTop:"90%"
    },
       modalview:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:"5%"
    },
    modalviewstyle:{
        justifyContent: "center",
         alignItems: "center",
         backgroundColor: 'rgba(0, 0, 0, 0.5)',
          flex: 1
    },
    innercontainer:{
      width:responsiveWidth(80),
      height:responsiveHeight(100),
      backgroundColor:"white",
      alignItems:"center",
      // borderRadius:10,
      padding:"1%"
  },
  modaltxtview:{
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor:"red",
    width:responsiveScreenWidth(60),
    borderRadius:10,
    height:responsiveScreenHeight(5)
  },
  modaltxt:{
    color:"white",
    fontSize:Fonts.f18,
    fontStyle:FontFamily.OpenSansRegular,
    marginLeft:"25%"
  },
 loader:{
    minHeight:responsiveHeight(6),
    // height:responsiveScreenHeight(20),
    minWidth:responsiveScreenWidth(20),
    marginTop:responsiveScreenHeight(30)
  }, 
  item: {
    width:responsiveScreenWidth(75),
    marginTop:"2%",
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 10,
    padding: 10,
  },
 
  flatlisttxt1:{
    color:"black",
    fontSize:Fonts.f15,
    fontFamily:FontFamily.OpenSansMedium
  },
   flatlisttxt:{
    flexDirection:"row",
    justifyContent:"space-between",
    borderRadius:10,
    marginTop:responsiveScreenHeight(1)
  
  },
  modaltxt1:{
    color:"grey",
    marginLeft:"1%",
    fontSize:Fonts.f16,
    fontFamily:FontFamily.OpenSansSemiBold
  },
  modaltxt2:{
    color:"black",
    fontSize:Fonts.f16,
    fontFamily:FontFamily.OpenSansSemiBold
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