import { StyleSheet, Platform } from "react-native";
import colors from "../../../Utility/colors/colors";
import FontFamily from "../../../assets/customFonts/customFonts";
import { scale } from "react-native-size-matters";


const styles = StyleSheet.create({
    PlaceholderStyling: {
        ...Platform.select({
            ios: {
                width: '85%',
                fontSize: scale(12),
                color: colors.blackColor,
                alignSelf: 'center',
                fontFamily: FontFamily.MONTSERRAT_Medium,
                paddingVertical: scale(11)
            },
            android: {
                width: '85%',
                fontSize: scale(14),
                color: colors.blackColor,
                alignSelf: 'center',
                fontFamily: FontFamily.MONTSERRAT_Regular,
                paddingVertical: scale(12),
                

            }
        })
    }
})

export default styles;