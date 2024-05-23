import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import colors from "../../../Utility/colors/colors";
import FontFamily from "../../../assets/customFonts/customFonts";
const styles = StyleSheet.create({
    largeText: {
        fontSize: scale(22),
        color: colors.whiteColor,
        fontFamily: FontFamily.MONTSERRAT_Regular,
        // letterSpacing: scale(1),
    },
    mediumText: {
        fontSize: scale(15),
        color: colors.whiteColor,
        fontFamily: FontFamily.MONTSERRAT_Medium,
        // letterSpacing: scale(1),
    },
    smallText: {
        fontSize: scale(10),
        color: colors.whiteColor,
        fontFamily: FontFamily.MONTSERRAT_Regular,
        // letterSpacing: scale(1),
    },
});

export default styles