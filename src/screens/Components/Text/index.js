import React from 'react';
import styles from './style';
import { Text } from 'react-native';

export const LargeText = ({
    text,
    style
}) => {
    return <Text style={[styles.largeText, style]}>{text}</Text>;
};

export const MediumText = ({
    text,
    style
}) => {
    return <Text style={[styles.mediumText, style]}>{text}</Text>;
};


export const SmallText = ({
    text,
    style
}) => {
    return <Text style={[styles.smallText, style]}>{text}</Text>;
};
