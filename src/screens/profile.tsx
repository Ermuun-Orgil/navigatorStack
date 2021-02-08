import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export const Profile = () => {

const navigation = useNavigation();

  return (
    <>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow',}}>
            <Text style={{fontSize: 30,}}>Welcome to Profile</Text>
            <Button 
                title="Go to Library"
                onPress={() => navigation.navigate("Library")}    
            />
        </View>
    </>
  )
}