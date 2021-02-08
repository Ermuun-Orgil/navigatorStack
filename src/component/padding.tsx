import React, { Children } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const paddingTypeSize: any = {
    'small': 6,
    'medium': 10,
    'large': 15,
}

type PaddingType = {
    children: any,
    top?: number | 'small' | 'medium' | 'large',
    left?: number | 'small' | 'medium' | 'large',
    right?: number | 'small' | 'medium' | 'large',
    bottom?: number | 'small' | 'medium' | 'large',
    size?: number | 'small' | 'medium' | 'large',
}

export const Padding: React.FC<PaddingType> = ({children, top, left, right, bottom, size}) => {
    const styles = StyleSheet.create({
        container: {
            paddingTop: top ? paddingTypeSize[top] : null,
            paddingLeft: left ? paddingTypeSize[left] : null,
            paddingRight: right ? paddingTypeSize[right] : null,
            paddingBottom: bottom ? paddingTypeSize[bottom] : null,
            padding: size ? paddingTypeSize[size] : null,
        },
    });

  return (
        <View style={styles.container}>
            {children}
        </View>
  );
};