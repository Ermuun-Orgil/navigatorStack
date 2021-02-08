import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type BackgroundType = {
    children: any,
    height: string | number,
    width: string | number,
    opacity?: number,
    color: string,
}

export const Background: React.FC<BackgroundType> = ({ children, height, width, color, opacity }) => {
    const styles = StyleSheet.create({
        container: {
            height: height,
            width: width,
            backgroundColor: color,
            opacity: opacity,
        },
    });

  return (
        <View style={styles.container}>
            {children}
        </View>
  );
};



