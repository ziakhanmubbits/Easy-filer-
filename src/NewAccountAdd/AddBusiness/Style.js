import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import FontFamily from "../../../assets/customFonts/customFonts";


const Style = StyleSheet.create({
    mian: {
        flex: 1,
        backgroundColor: "white"
    },
    contentstyle: {
        flexGrow: 1
    },
    dropdown: {
        height: responsiveHeight(5),
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 8,
        width: responsiveWidth(90)
    },
    viewinsidescroll: {
        alignItems: 'center',
        marginTop: '5%'
    },
    box1: {
        height: responsiveHeight(5),
        borderWidth: 0.5,
        width: responsiveWidth(90),
        marginTop: "5%",
        borderRadius: 5,
        borderColor: 'gray'
    },
    box2: {
        marginTop: "1.5%",
    },
    box: {
        height: responsiveHeight(5),
        borderWidth: 0.5,
        width: responsiveWidth(90),
        marginTop: "1.5%",
        borderRadius: 5,
        borderColor: "gray"
    },
    nbr: {
        paddingVertical: 0,
        backgroundColor: "white",
    },
    phoneNumberView: {
        borderWidth: 0.7,
        borderRadius: 5,
        borderColor: "gray",
        width: responsiveWidth(90)
    },
    cnicview: {
        height: responsiveHeight(5),
        width: responsiveWidth(90),
        borderRadius: 5,
        borderWidth: 0.5,
        marginTop: '2%',
        borderColor: "gray"
    },
    btn: {
        height: responsiveHeight(5),
        width: responsiveWidth(40),
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "red",
        borderRadius: 5
    },
    txtbtn: {
        color: "white",
        fontSize: 16,
        fontFamily: FontFamily.OpenSansBold
    },
    btnview: {
        alignSelf: "flex-end",
        marginRight: "5%",
        marginTop: "1%"
    }
})
export default Style