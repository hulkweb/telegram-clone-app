import React, { useState } from 'react';
import {Ionicons} from '@expo/vector-icons';

import { View,Text,StyleSheet,Image,Button } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
function ChatScreen({navigation,navigationParent}) {
    const [state, setstate] = React.useState({});
    const [users, setusers] = useState([]);

    const fetchUsers=()=>{
      fetch("https://backend-fb-hulkweb.herokuapp.com/users")
        .then((reponse)=>{
           return reponse.json();
        }).then((re)=>{console.log(re);
         setusers(re.users);
        }).catch((err)=>{
            console.log(err);
        });
    }
    const chats=[

    {gn:"Tinkal H",id:2,lm:"las msg"},
    {gn:"Pranay P",id:3,lm:"last ms"},
    {gn:"Vikas P",id:4,lm:"last ms"},
    {gn:"Mohit P",id:5,lm:"last "},
    {gn:"Harsh P",id:6,lm:"last msg"},
    {gn:"Vishal P",id:7,lm:"last msg"},
    {gn:"Nilesh T",id:8,lm:"last msg"},
    {gn:"Mohit D",id:9,lm:"last msg8"},
    {gn:"Pratyush J",id:10,lm:"last msg"},
    {gn:"Raj P",id:11,lm:"last msg"},
    {gn:"DEvendra D",id:12,lm:"last msg"},
    {gn:"group8",id:13,lm:"last msg"}
  
  ]
    const set=()=>{
    fetchUsers();
    
    }
    
    React.useEffect(() => {
   
  
      
    }, [])
    return (
      <View style={styles.container}>
       <View style={{display:"flex",flexDirection:"row",padding:10,backgroundColor:"#7899D2",height:100,paddingTop:50}}>
        <TouchableOpacity style={{flex:1,paddingRight:10}} onPress={()=>{}}>
            <Ionicons name="menu" color="white" size={29}  />
        </TouchableOpacity>
        <Text style={{fontSize:20,color:"white",fontWeight:"600",fontFamily:"serif",flex:3}}>
            Telegram
        </Text>
        <TouchableOpacity style={{flex:1,paddingRight:10}} onPress={()=>{fetchUsers()}}>
            <Ionicons name='reload' color="white" size={29}  />
        </TouchableOpacity>
       </View>
        <ScrollView style={styles.chatSection}>
          {users.map((chat1,index)=>(
            <TouchableOpacity key={index} style={{borderBottomColor:"grey",borderBottomWidth:0.7,display:"flex",flexDirection:"row"}} 
            onPress={()=>{navigation.navigate('singlechat',{current:{userName:chat1.userName,id:chat1._id}})}}>
            <View  style={styles.singleChat}   >
               
               <Text style={styles.Avtar}>
                 {chat1.userName[0]}
               </Text>
               <View style={{display:'flex',flexDirection:'column'}}>
                 <Text style={styles.chatText} >{chat1.userName}</Text>
                 <Text style={styles.chatText1} >{chat1._id}</Text>
               </View>
             </View>
             <View style={{flex:1}}>
                 <Text style={{fontSize:12,color:"grey",paddingTop:10}}>
                  {chat1.userName.length}:1{chat1.userName.length-5}pm
                 </Text>
             </View>
            </TouchableOpacity>
           
        ))}
             
        </ScrollView>
       </View>)
}

export default ChatScreen
export const styles = StyleSheet.create({
    container: {
      display:'flex',
     
    
    },
    headerone:{
      display:"flex",
      flexDirection:'row',
      justifyContent:'space-between',
      paddingTop:40,
      paddingBottom:0,
      marginBottom:0,
      paddingLeft:22,
      paddingRight:25,
      backgroundColor:'green'
      
      
    
    },
    headertwo:{
      display:"flex",
      flexDirection:'row',
      justifyContent:'space-between',
      padding:10,
      paddingLeft:20,
      backgroundColor:'green',
      paddingBottom:0,
    
    },
    icons:{
      margin:0,
      marginTop:10,
      paddingTop:10,
      color:'white'
    },
  
    headerText:{
      color:"white",
      fontWeight:"500",
      fontSize:20,
      paddingTop:10,
      paddingRight:120
      
    },
    chatText:{
      color:"black",
      fontWeight:"500",
      fontSize:18,
      fontFamily:"serif"
      
    },
    chatText1:{
      color:"grey",
      fontWeight:"300",
      fontSize:15,
      fontFamily:"sans-serif"

      
      
    },
    headerTwoText:{
      color:"grey",
      fontWeight:"400",
      fontSize:14,
      padding:10,
      textAlign:'center',
      margin:5,
      borderBottomColor:"white",
      borderBottomWidth:3,
      textTransform:'uppercase'
  
    },
    title: {
      fontSize: 20,
      
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    chatSection:{
      display:'flex',
      flexDirection:'column',
      
    },
    Avtar:{
      height:50,
      width:50,
      borderRadius:50,
      marginRight:10,
      backgroundColor:"#880DA5",
      textAlign:"center",
      textAlignVertical:"center",
      color:"white",
      fontFamily:"serif",
      fontWeight:"700"
    },
    singleChat:{
      display:'flex',
      flexDirection:'row',
      padding:10,
      flex:4
  
    }
  });