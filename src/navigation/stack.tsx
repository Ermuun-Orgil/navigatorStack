import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Settings, Profile, Library } from '../screens';
import { Easing } from 'react-native';

const Stack = createStackNavigator();

export const MyNavigationStack = () => {


  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Settings" component={Settings} options={{
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 1000,
              easing: Easing.bounce
            }
          }
        }
      }}/>
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="Library" component={Library}/>
    </Stack.Navigator>
  )
}