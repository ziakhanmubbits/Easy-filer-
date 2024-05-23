import { StyleSheet, Dimensions } from 'react-native';

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import FontFamily from '../assets/customFonts/customFonts';


const Style = StyleSheet.create({
    container: {
        flex: 1
    },
    infoview: {
        alignItems: "center",
        width: responsiveWidth(100),
        height: responsiveHeight(13),
        borderBottomWidth: 1,
        borderBottomColor: "#EBE2E2",
    },
    txt1: {
        color: 'black',
        fontSize: 16,
        fontFamily: FontFamily.OpenSansBold, marginTop: "3%"
    },
    txt2: {
        color: 'black',
        fontSize: 21,
        fontFamily: FontFamily.OpenSansBold

    },
    txt3: {
        color: 'black',
        fontFamily: FontFamily.OpenSansBold

    },
});
export default Style;