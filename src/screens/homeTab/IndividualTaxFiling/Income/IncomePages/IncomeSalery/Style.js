import { StyleSheet } from 'react-native';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth
} from 'react-native-responsive-dimensions'
import FontFamily from '../../../../../../assets/customFonts/customFonts';
import { Fonts } from '../../../../../../assets/Styles/Fonts';
import colors from '../../../../../../Utility/colors/colors';
import { scale } from 'react-native-size-matters';

const Style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:"white"

  },
  imageview: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "12%"
  },
  image: {
    height: responsiveHeight(7.5),
    width: responsiveWidth(15)

  },
  imageviewtext: {
    justifyContent: "center",
    alignItems: "center"
  },
  text1: {
    color: "black",
    fontSize:responsiveScreenFontSize(2.2),
    fontFamily:FontFamily.MONTSERRAT_Light
  },
  text2: {
    color: "grey",
    fontSize:responsiveScreenFontSize(1.9),
    fontFamily:FontFamily.MONTSERRAT_Light

  },
  touchabletext: {
    alignItems: "center",
    marginTop: "5%"
  },
  touchabletextstyle: {
    borderBottomWidth: 1,
    borderBottomColor: "red"
  },
  text3: {
    color: "black",
    fontSize:responsiveScreenFontSize(1.9),
    fontFamily:FontFamily.OpenSansSemiBold
  },
  textinputview: {
    marginTop: "5%",
    flexDirection:"row"
  },
  text4: {
    color: "black",
    margin: "2%",
      fontSize:responsiveScreenFontSize(1.8),
      fontFamily:FontFamily.MONTSERRAT_Light
  },
  placeholder1view: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"

  },
  placeholder1: {
    borderWidth: 1.5,
    borderColor: "grey",
    padding: "1%",
    width: responsiveWidth(70),
    borderRadius: 5,
    color: "black",
    fontFamily:FontFamily.OpenSansSemiBold
  },
  textinputview2: {
    marginTop: "1%"
  },
  textinputview2style: {
    color: "black",
    margin: "2%",
    fontSize:responsiveScreenFontSize(1.8),
    fontFamily:FontFamily.MONTSERRAT_Light
  },
  placeholder2view: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  },
  hideview: {
    height: responsiveHeight(5),
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text5: {
    color: "black",
    margin: "2%",
    fontSize:responsiveScreenFontSize(1.8),
    fontFamily:FontFamily.OpenSansRegular
  },
  text6: {
    left: "3%",
    color: "black",
    fontSize:responsiveScreenFontSize(1.8),
    fontFamily:FontFamily.OpenSansRegular
  },
  text8: {
    left: "3%",
    marginTop: "3%",
    color: "black",
    fontSize:responsiveScreenFontSize(1.8),
    fontFamily:FontFamily.OpenSansRegular
  },
  text9: {

    left: "2%",
    color: "black",
    fontSize:responsiveScreenFontSize(1.8),
    fontFamily:FontFamily.OpenSansRegular
  },
  switchtoggleview: {
    width: responsiveWidth(18),
    height: responsiveHeight(4),
    borderColor: "red",
    borderWidth: 0.8,
    flexDirection: "row",
    marginRight: "2%"
  },
  innercontainer: {
    width: responsiveWidth(85),
    height: responsiveHeight(10),
    backgroundColor: "white",
    justifyContent:"center",
    alignItems: "center",
    borderRadius: 10,
  },
  placeholder2: {
    padding: "2.6%",
    borderWidth: 1.5,
    borderColor: "grey",
    width: responsiveWidth(70),
    borderRadius: 5,
  },
  accview: {
    alignSelf: "center",
    width: responsiveWidth(72),
    height: responsiveHeight(5.5),
    marginTop: '2%',
    borderWidth: 1.5,
    borderColor: "grey",
    borderRadius: 5,
    justifyContent: "center"
  },
  accinput: {
    flexDirection: 'row',
    alignItems: "center"
  },
  inputrs: {
    width: responsiveWidth(45),
    marginLeft: '2%',
    color: 'grey'
  },
  icn: {
    marginLeft: '2%'
  },
  pressable: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1
  },
  modaltxt1: {
    color: "black",
    fontSize:responsiveScreenFontSize(2),
    fontFamily:FontFamily.MONTSERRAT_Bold,
    textAlign:"center"
  },
  modaltxt2: {
    color: "black",
    fontSize:scale(10),
    fontFamily:FontFamily.MONTSERRAT_Regular,
    textAlign:"center"
    
  },
  modaltxt3: {
    color: "black",
    fontSize:scale(10),
    fontFamily:FontFamily.MONTSERRAT_Regular,
  },
  innerView: {
    height: responsiveHeight(7),
    width: responsiveWidth(100),
    borderBottomWidth: 1,
    borderBottomColor: "#EBE2E2",
    backgroundColor: "#F5F5F5",
    flexDirection: "row"
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
  }


});
export default Style;