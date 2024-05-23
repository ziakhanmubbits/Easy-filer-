import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { useTogglePasswordVisibility } from '../Components/useTogglePasswordVisibility';
import { useTogglePasswordVisibility2 } from '../Components/useTogglePasswordVisibility2';
import Style from './style';
import { TextInput } from 'react-native-paper';
import FontFamily from '../../assets/customFonts/customFonts';


const NTNreg = () => {
    const [pin, setPin] = useState('')
    const [password, setPassword] = useState('')
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } =
        useTogglePasswordVisibility2();

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ marginTop: responsiveScreenHeight(2) }}>
                <View style={Style.passbox}>
                    <View style={Style.input}>
                        <TextInput
                            style={Style.placeholder1}
                            outlineStyle={Style.placeholder2}
                            outlineColor='black'
                            activeOutlineColor={'black'}
                            label="Password"
                            secureTextEntry={passwordVisibility}
                            value={password}
                            onChangeText={(text) => {
                                setPassword(text);
                            }}
                            mode="outlined"
                        />
                    </View>
                    <View style={Style.icn}>
                        <Pressable onPress={handlePasswordVisibility}>
                            <MaterialCommunityIcons name={rightIcon} size={20} color='black' />
                        </Pressable>
                    </View>
                </View>
                <View style={Style.passbox}>
                    <View style={Style.input}>
                        <TextInput
                            style={Style.placeholder1}
                            outlineStyle={Style.placeholder2}
                            outlineColor='black'
                            activeOutlineColor={'black'}
                            label="Pin"
                            secureTextEntry={passwordVisibility2}
                            value={pin}
                            onChangeText={(text) => {
                                setPin(text);
                            }}
                            mode="outlined"
                        />
                    </View>
                    <View style={Style.icn}>
                        <Pressable onPress={handlePasswordVisibility2}>
                            <MaterialCommunityIcons name={rightIcon2} size={20} color='black' />
                        </Pressable>
                    </View>
                </View>
                <View style={{ marginTop: responsiveScreenHeight(5), alignSelf: "flex-end", width: responsiveScreenWidth(30) }}>
                    <TouchableOpacity style={{ width: responsiveScreenWidth(25), borderRadius: 10, height: responsiveScreenHeight(6), backgroundColor: "red", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: "white", fontSize: responsiveScreenFontSize(2), fontFamily: FontFamily.MONTSERRAT_SemiBold }}>Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default NTNreg