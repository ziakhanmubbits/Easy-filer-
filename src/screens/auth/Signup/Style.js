import { StyleSheet } from 'react-native'
import {
    responsiveHeight,
    responsiveScreenFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
}
    from 'react-native-responsive-dimensions'
import FontFamily from '../../../assets/customFonts/customFonts'
import { Fonts } from '../../../assets/Styles/Fonts'


const Style = StyleSheet.create({
    outview: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFF"
    },
    CntntStyle: {
        flexGrow: 1
    },
    txtView: {
        width:responsiveScreenWidth(100),
        alignItems:"center",
        justifyContent:"center",
    },
    uprtxt: {
        fontFamily: FontFamily.MONTSERRAT_Medium,
        color: "black",
        fontSize: responsiveScreenFontSize(2),
        textAlign:"center"
    },
    box1: {
        width: responsiveScreenWidth(90), // already given 
        marginTop: "10%",
        borderRadius: 5,
         alignSelf: "center",
        //give this width, and check again
    },
    box: {

        width: responsiveScreenWidth(90),
        marginTop: "2%",
        alignSelf: "center"
    },
    box2: {
        marginTop: "2%",
        alignSelf: "center"
    },
    box11: {
        marginTop: "1%",
        borderWidth: 1,
        width: responsiveScreenWidth(90),
        backgroundColor: "#EBE2E2",
        borderRadius: 5,
        borderColor: "gray",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    box12: {
        marginTop: "3%",
        borderWidth: 1,
        justifyContent: "space-between",
        width: responsiveScreenWidth(90),
        backgroundColor: "#EBE2E2",
        borderRadius: 5,
        borderColor: "gray",
        flexDirection: "row", alignItems: "center"
    },
    btnView: {
        alignSelf: "center",
        marginTop: "5%"
    },
    btn: {
        height: responsiveScreenHeight(6),
        width: responsiveScreenWidth(90),
        backgroundColor: "#EB0414",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#EB0414"
    },
    btntxt: {
        color: "white",
        fontSize:Fonts.f18,
        fontFamily: FontFamily.OpenSansRegular
    },
    Forpass: {
        color: "#000000",
        fontFamily: FontFamily.OpenSansBold
    },
    pasView: {
        marginTop: "3%"
    },
    lastView: {
        alignSelf: "center",
        marginTop: "5%",
        flexDirection: "row"
    },
    lasttxt: {
        color: "#EB0414",
        fontSize:Fonts.f18,
        fontFamily: FontFamily.OpenSansBold,
        alignSelf: "center",
        left: "10%"
    },
    lasttxt1: {
        color: "#000000",
        fontSize: Fonts.f14,
        fontFamily: FontFamily.OpenSansRegular
    },
    ltr: {
        alignItems:"center",
        // alignSelf: "center",
        marginTop: "3%"
    },
    mixltr: {
        fontFamily: FontFamily.OpenSansRegular,
        fontSize:responsiveScreenFontSize(1.6),
        color: "black"
    },
    icon: {
        top: "15%",
        marginLeft: 70
    },
    nbr: {
        paddingVertical: 0,
        backgroundColor: "#FFF",
        color: "black"
    },
    phoneNumberView: {
        paddingVertical: 0,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "gray",
        width: responsiveScreenWidth(89)
    },
    textFailed: {
        alignSelf: 'flex-start',
        color: 'red',
    },
    error: {
        color: 'red',
        marginLeft: '5%'
    },
    error1: {
        color: 'red',
        marginLeft: '2%'
    },
    indc: {
        bottom: "45%"
    },
    txtinput: {
        marginRight: "5%"
    },
    input: {
        width: responsiveScreenWidth(90),
        left: "16%"
    },
    passbox: {
        marginTop: '2%',
        alignSelf: "center",
        flexDirection: "row",
        alignItems: 'center',
        // width:responsiveScreenWidth(90)
    },
    icn: {
        alignItems: "center",
        right: "60%"
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
    modalmainview:{
        backgroundColor: 'white',
         height: responsiveScreenHeight(16),
         alignItems:"center",
         borderRadius:20,
         width:responsiveScreenWidth(80)
      },
      modaltext:{
        color:"black",
        fontSize:responsiveScreenFontSize(2),
        fontFamily:FontFamily.OpenSansSemiBold
      },
      modalbuttonview:{
        alignSelf:"center",
        // marginTop:"2%"
     
      },
      modalbutton:{
        backgroundColor:"#EB0414",
        height:responsiveScreenHeight(4),
        width:responsiveScreenWidth(18),
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        marginTop:"4%"
      },
      modalbuttontext:{
        color:"white",
        fontSize:Fonts.f16,
        alignItems:"center",
        fontFamily:FontFamily.OpenSansRegular
      },
      loader:{
        minHeight:responsiveHeight(10),
        // height:responsiveScreenHeight(20),
        minWidth:responsiveScreenWidth(20),
        // marginTop:responsiveScreenHeight(30)
      },
})

export default Style