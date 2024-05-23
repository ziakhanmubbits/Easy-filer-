import { StyleSheet } from 'react-native';

import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import FontFamily from '../../../../../../assets/customFonts/customFonts';
import { Fonts } from '../../../../../../assets/Styles/Fonts';

const Style = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        color: "black",
        marginTop: "10%",
        fontSize: 16,
        fontFamily:FontFamily.OpenSansRegular,
        left: "4%"
    },
    text2: {
        color: "black",
        fontSize: 14,
        left: "4%",
        marginTop: "5%",
        fontFamily:FontFamily.OpenSansRegular,
    },
    placeholder1: {
        paddingHorizontal: "3%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding: "1%",
        marginLeft: "4%",
        width: responsiveWidth(35),
        borderRadius: 5,
        color: "black"
    },
    placeholder2: {
        paddingHorizontal: "3%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding: "1%",
        marginLeft: "2%",
        width: responsiveWidth(27),
        borderRadius: 5,
        color: "black"
    },
    icntxtinput: {
        width: responsiveScreenWidth(25),
        height: responsiveScreenHeight(4),
        marginLeft: "2%",
      },
      dropdown: {
        height: responsiveScreenHeight(5),
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 5,
        backgroundColor: "gainsboro"
      },
    placeholder3: {
        marginTop:"2%",
        paddingHorizontal: "3%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding: "1%",
        marginLeft: "4%",
        width: responsiveWidth(35),
        borderRadius: 5,
        color: "black"
    },
    touchableview: {
        alignItems: "center",
        marginTop: "3%"
    },
    touchable: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: 'rgb(230,230,230)',
        width: responsiveWidth(94),
        padding: "2%",
        borderRadius: 3
    },
    touchabletext: {
        color: "black",
        fontFamily:FontFamily.OpenSansSemiBold,
        fontSize: Fonts.f18
    },
    innerplaceholder1: {
        paddingHorizontal: "2%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding: "0.3%",
        marginTop: "1.5%",
        width: responsiveWidth(45),
        borderRadius: 5,
        color: "black"
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
        color: "black"
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
        paddingHorizontal:"2%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding: "1%",
        width: responsiveWidth(40),
        borderRadius: 5,
        color: "black"
    },
    bottomplaceholder2: {
        paddingHorizontal:"2%",
        borderWidth: 1.5,
        borderColor: "grey",
        padding: "1%",
        marginHorizontal: "2%",
        width: responsiveWidth(35),
        borderRadius: 5,
        color: "black"
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
        fontSize: 15,
        fontFamily:FontFamily.OpenSansRegular,
    },
    hiddenview1text2: {
        color: "black",
        fontSize: 15,
        marginTop: "2%",
        fontFamily:FontFamily.OpenSansRegular,
   
    },
    newdisplaytext: {
        color: "black",
        fontFamily:FontFamily.OpenSansRegular,
        left: "3%",
        marginTop: "1%"
    },
    newdisplayview1:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:"1%"
    },
    newdisplaytext3: {
        color: "black",
        fontFamily:FontFamily.OpenSansRegular,
    },
    newdisplayview2:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:"1%"
    },
    newdisplayview3:{
        flexDirection:"row",
        marginTop:"1%",
        marginLeft:"3%"
    },
    bottomview:{
        flexDirection: "row",
         justifyContent: "center",
          marginTop: "3%"
    },
    innerView: {
        height: responsiveHeight(7),
        width: responsiveWidth(100),
        borderBottomWidth: 1,
        borderBottomColor: "#EBE2E2",
        backgroundColor: "#F5F5F5",
        flexDirection: "row"
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
        backgroundColor: "gainsboro"
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