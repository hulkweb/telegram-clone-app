import React from 'react'
import { View,Text,StyleSheet,Image,Button } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator}  from '@react-navigation/stack';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ChatScreen from './ChatScreen';

import ChatComponent from './ChatComponent';
const Stack=createStackNavigator();
function HomeScreen({navigation}) {
    return (
      <NavigationContainer independent={true}>
          <Stack.Navigator>
             <Stack.Screen name="chat" component={ChatScreen} initialParams={{navigationParent:navigation}}  options={{headerShown:false}} />
             <Stack.Screen name="singlechat" component={ChatComponent} options={{headerShown:false}} />

          </Stack.Navigator>
      </NavigationContainer>
   
    )
}



export default HomeScreen


  