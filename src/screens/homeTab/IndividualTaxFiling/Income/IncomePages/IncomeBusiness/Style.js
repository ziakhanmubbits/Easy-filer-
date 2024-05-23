import { StyleSheet } from 'react-native';

import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import { Fonts } from '../../../../../../assets/Styles/Fonts';
import FontFamily from '../../../../../../assets/customFonts/customFonts';
import { scale } from 'react-native-size-matters';

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    alignItems: 'center',
    marginVertical: "3%",
    borderRadius: 10,
    width: responsiveWidth(22)
  },
  image: {
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    resizeMode:"center"

  },
  innerView: {
    height: responsiveHeight(7),
    width: responsiveWidth(100),
    borderBottomWidth: 1,
    borderBottomColor: "#EBE2E2",
    backgroundColor: "#F5F5F5",
    flexDirection: "row"
  },
  flatlisttxt1:{
    color:"black",
    marginTop:"5%",
    textAlign:"center",
    fontSize:responsiveScreenFontSize(1.6),
    fontFamily:FontFamily.MONTSERRAT_Light
  },
   flatlisttxt:{
    alignItems:"center",
    marginTop:responsiveScreenHeight(1)
  
  },
  loader:{
    minHeight:responsiveHeight(10),
    justifyContent:"center",
    alignItems:"center",
    marginTop:"70%"
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
  },
  businnes:{
    color: "black",
    fontSize: scale(16),
    fontFamily: FontFamily.MONTSERRAT_Medium 
  }

});
export default Style;