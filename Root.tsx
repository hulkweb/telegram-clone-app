import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import {Ionicons} from '@expo/vector-icons'
import { Linking, StyleSheet, Text, View,Image } from 'react-native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import { StateProvider, useStateValue } from './StateProvider';
import reducer, { actiontypes, initialState } from './reducer';
import HomeScreen from './screens/HomeScreen';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import LoginScreen from './screens/LoginScreen';


const Drawer=createDrawerNavigator();
export default function Root() {
    const [{user,basket},dispatch]=useStateValue();

  return (
      <>
      {user? <RootInside/>:<LoginScreen/>}
      </>
 
  );
}


function CustomDrawerContent(props) {
  
    const [{user,basket},dispatch]=useStateValue();
  return (
    <ScrollView style={{flex:1,backgroundColor:"white"}}>
         <View style={{padding:10,paddingTop:30,display:"flex",flexDirection:"column",backgroundColor:"#668FD4",height:160,alignItems:"flex-start"}}>
          
             <Image source={{uri:"https://i.imgur.com/MqoOVdW.jpg"}} style={styles.Avtar}/>
             <View style={{display:"flex",flexDirection:"column",height:70}}>
               <Text style={{padding:5,flex:2,fontSize:18,color:"white",fontFamily:"serif",textTransform:"capitalize"}} >{user.userName}</Text>
              <Text style={{padding:5,flex:2,fontSize:12,color:"white",fontFamily:"serif"}} >+91-{user.mobile}</Text>
             </View>
            
            
          
         </View>

       <DrawerContentScrollView {...props} >
      <DrawerItemList {...props}  labelStyle={{fontSize:18,textTransform:"capitalize",paddingLeft:10,fontWeight:"600"}}/>
      <DrawerItem label="Telegram FAQ" icon={()=>{ return<Ionicons name="help-circle" color="grey" size={25} />}} 
         labelStyle={{fontSize:20}} style={{borderTopColor:"black",borderTopWidth:0.6}}
          onPress={() =>{}} />
    <DrawerItem label="Logout" icon={()=>{ return<Ionicons name='log-out' color="grey" size={25} />}} 
         labelStyle={{fontSize:20}} style={{borderTopColor:"black"}}
          onPress={() =>{dispatch({type:actiontypes.SET_USER,item:null})}} />
     
    </DrawerContentScrollView>
    </ScrollView>
    
  );
}
const RootInside=()=>{
  const optionHome={drawerIcon:((props)=>{return <Ionicons size={25} color="grey" name="people" /> }) ,headerShown:true,headerTitle:"Telegram",headerTintColor:"white",headerStyle:{backgroundColor:"#7899D2",height:100} };
  const optionContact={drawerIcon:((props)=>{return <Ionicons size={25} color="grey" name='person' /> }) ,headerShown:true,headerTitle:"Telegram",headerTintColor:"white",headerStyle:{backgroundColor:"#7899D2",height:100} };
  const optionCalls={drawerIcon:((props)=>{return <Ionicons size={25} color="grey" name='call' /> }) ,headerShown:true,headerTitle:"Telegram",headerTintColor:"white",headerStyle:{backgroundColor:"#7899D2",height:100} };
  const optionSetting={drawerIcon:((props)=>{return <Ionicons size={25} color="grey" name='settings' /> }) ,headerShown:true,headerTitle:"Telegram",headerTintColor:"white",headerStyle:{backgroundColor:"#7899D2",height:100} };
  return(
     <NavigationContainer>
        <Drawer.Navigator
            
              initialRouteName='home'
              openByDefault={false}
             drawerStyle={{width:"80%",backgroundColor:"white"}}
             overlayColor='transparent'
             hideStatusBar={true}
             
             drawerPosition="left" drawerType="front" 
             drawerContentOptions={{activeBackgroundColor:"white",activeTintColor:"black"}}
             drawerContent={props=><CustomDrawerContent {...props} />}
             >
  
            <Drawer.Screen name="New Group"  component={HomeScreen} 
             options={{headerShown:false,drawerIcon:((props)=>{return <Ionicons size={25} color="grey" name="people" /> }) ,headerTitle:"Telegram",headerTintColor:"white",headerStyle:{backgroundColor:"#7899D2",height:100}}} />
             <Drawer.Screen name="contacts"  component={HomeScreen} 
             options={optionContact} />
             <Drawer.Screen name="call"  component={HomeScreen} 
             options={optionCalls} />
             <Drawer.Screen name="settings"  component={HomeScreen} 
             options={optionSetting} />
          
        </Drawer.Navigator>
     </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Avtar:{
    height:60,
    width:60,
    borderRadius:50,
    marginRight:10,
    
  },
});
