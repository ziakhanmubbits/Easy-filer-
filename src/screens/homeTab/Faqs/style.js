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
    innerView: {
        height: responsiveScreenHeight(7),
        width: responsiveScreenWidth(100),
        borderBottomWidth: 1,
        borderBottomColor: "#EBE2E2",
        backgroundColor: "#F5F5F5",
        flexDirection: "row"
    },
    view: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: responsiveScreenHeight(2),
        borderBottomWidth: 0.6,
        borderBottomColor: "black"
    },
    toucable: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    text: {
        color: "black",
        textAlign: "center",
        fontSize: responsiveScreenFontSize(2.2),
        fontFamily: FontFamily.OpenSansMedium
    },
    modalmainview: {
        backgroundColor: 'white',
        // height: responsiveScreenHeight(20),
        alignItems: "center",
        borderRadius: 10,
        width: responsiveScreenWidth(90)
      },
      modaltext: {
        color: "black",
        fontSize: responsiveScreenFontSize(2),
        fontFamily: FontFamily.OpenSansSemiBold,
        textAlign:"center"
      },
      modalbuttonview: {
        alignSelf: "center",
        // marginTop:"2%"
    
      },
      modalbutton: {
        backgroundColor: "#EB0414",
        height: responsiveScreenHeight(4),
        width: responsiveScreenWidth(18),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: "4%"
      },
      modalbuttontext: {
        color: "white",
        fontSize: Fonts.f16,
        alignItems: "center",
        fontFamily: FontFamily.OpenSansRegular
      },
})

export default Style