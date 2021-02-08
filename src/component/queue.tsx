import React, { Children } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const mapTypeToSize: any = {
    'small': 6,
    'medium': 10,
    'large': 15
}

type MarginType = {
    children: any,
    gap: 'small' | 'medium' | 'large',
}

export const Margin: React.FC<MarginType> = ({children, top }) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: top ? mapTypeToSize[top] : null,
            
        },
    });

  return (
        <View style={styles.container}>
            {children}
        </View>
  );
};



