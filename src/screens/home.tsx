import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export const Home = () => {

const navigation = useNavigation();

  return (
    <>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray',}}>
            <Text style={{fontSize: 30,}}>Home</Text>
            <Button 
                title="Go to Settings"
                onPress={() => navigation.navigate("Settings")}    
            />
        </View>
    </>
  )
}