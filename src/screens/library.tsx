import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export const Library = () => {

const navigation = useNavigation();

  return (
    <>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black',}}>
            <Text style={{fontSize: 30, color: 'pink'}}>Welcome to Library</Text>
            <Button 
                title="Go to Home"
                onPress={() => navigation.navigate("Home")}    
            />
        </View>
    </>
  )
}