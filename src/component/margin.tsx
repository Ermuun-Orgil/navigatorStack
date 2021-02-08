import React, { Children } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const mapTypeToSize: any = {
    'small': 10,
    'medium': 50,
    'large': 100
}

type MarginType = {
    children: any,
    top?: 'small' | 'medium' | 'large',
    left?: 'small' | 'medium' | 'large',
    right?: 'small' | 'medium' | 'large',
    bottom?: 'small' | 'medium' | 'large',
    size?: 'small' | 'medium' | 'large',
}

export const Margin: React.FC<MarginType> = ({children, top, left, right, bottom, size}) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: top ? mapTypeToSize[top] : null,
            marginLeft: left ? mapTypeToSize[left] : null,
            marginRight: right ? mapTypeToSize[right] : null,
            marginBottom: bottom ? mapTypeToSize[bottom] : null,
            margin: size ? mapTypeToSize[size] : null,
            
        },
    });

  return (
        <View style={styles.container}>
            {children}
        </View>
  );
};



