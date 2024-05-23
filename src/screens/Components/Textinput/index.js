import React from 'react'
import { TextInput } from 'react-native'
import styles from './style'

const CustomInput = ({
    placeholder,
    style,
    onChange,
    value,
    placeholderTextColor,
    secureTextEntry,
    multiline,
    keyboardType,
    error,
}) => {
    const borderColor = error ? 'red' : 'black';
    return (
        <TextInput
            placeholder={placeholder}
            style={[
                styles.PlaceholderStyling,
                style,
                { borderColor }, 
            ]}
            onChangeText={onChange}
            secureTextEntry={secureTextEntry}
            value={value}
            keyboardType={keyboardType}
            multiline={multiline}
            placeholderTextColor={placeholderTextColor}
        />
    )
}

export default CustomInput