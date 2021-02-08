import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export const Settings = () => {

const navigation = useNavigation();

  return (
    <>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black',}}>
            <Text style={{fontSize: 30, color: 'pink'}}>Welcome to Settings</Text>
            <Button 
                title="Go to Profile"
                onPress={() => navigation.navigate("Profile")}    
            />
        </View>
    </>
  )
}