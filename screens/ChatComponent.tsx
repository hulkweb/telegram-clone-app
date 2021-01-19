
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import {Input} from 'react-native-elements';


  import { Ionicons ,Entypo} from '@expo/vector-icons';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useStateValue } from '../StateProvider';
import  {actiontypes} from "../reducer"
import { or, Value } from 'react-native-reanimated';
 

function ChatComponent({navigation,route}) {
   const [msg, setmsg] = useState("");
   const {current}=route.params;
   const [{user,basket},dispatch]=useStateValue();
   const [messages, setmessages] = useState([]);



  const sendMsg=()=>{
    fetch("https://backend-fb-hulkweb.herokuapp.com/user/message",{
        method:'POST',
         body:JSON.stringify({
    reciver:current.id,sender:user._id,msg:msg
        }),
    
    headers: {'Content-Type': 'application/json'}})
        .then((reponse)=>{
           return reponse.json();
        }).then((re)=>{console.log(re.msgs);
           setmsg("");
        }).catch((err)=>{
            console.log(err);
        });
  }

    const fetchMsgs=()=>{

      fetch("https://backend-fb-hulkweb.herokuapp.com/user/get/messages")
        .then((reponse)=>{
           return reponse.json();
        }).then((re)=>{console.log(re.msgs);
           setmessages(re.msgs)
        }).catch((err)=>{
            console.log(err);
        });
    }
      
      useEffect(() => {
  fetchMsgs()


      }, [])
    return (
    <View style={styleC.chatContianer}>

       <View style={{display:"flex",flexDirection:"row",padding:10,backgroundColor:"#7899D2",height:100,paddingTop:20}}>
         <View  style={styles.singleChat}   >
               <TouchableOpacity onPress={()=>{navigation.navigate('chat')}}>
                   <Ionicons name="arrow-back" color="white" size={25} style={{paddingTop:10,paddingRight:5}} />
               </TouchableOpacity>
               <Text style={styles.Avtar}>
                 {current.userName[0]}
               </Text>
               <View style={{display:'flex',flexDirection:'column'}}>
                 <Text style={styles.chatText} >{current.userName}</Text>
                 <Text style={styles.chatText1} >today at 3:15 PM</Text>
               </View>
               <TouchableOpacity style={{alignSelf:"flex-end",marginLeft:100}} onPress={()=>{fetchMsgs()}}>
                   <Ionicons name='reload' color="white" size={25} style={{paddingTop:10,paddingRight:5}} />
               </TouchableOpacity>
             </View>
       </View>
        <ScrollView style={{display:"flex",overflow:"scroll"}}>
          

     
           

 {messages.filter((message)=>{ if((user._id===message.sender || current.id===message.sender) &&(user._id===message.reciver || current.id===message.reciver)  ){return true;} return false }).map((message)=>(
    <View style={user._id===message.sender?styleC.singleMsgS:styleC.singleMsgR}>
    <Text style={styleC.msgName}>{user._id===message.sender?user.userName:"you"}</Text>
   <Text style={styleC.msgText} >{message.msg}</Text>
   <Text style={styleC.msgTime} >{ new Date(message.date).toUTCString()}</Text>
    
 </View>
  

     

 ))}

           
        </ScrollView>
        <View style={styleC.bottomBar}>
        <Ionicons name="link" 
              style={{backgroundColor:"white",borderTopLeftRadius:50,borderBottomLeftRadius:50,padding:10,paddingTop:15}} 
               color="grey" size={30}  />
        <TextInput style={{flex:1,backgroundColor:"white",borderTopColor:"gray"}} placeholder="Enter msg" onChangeText={value=>setmsg(value)} />
        <Ionicons name="happy" color="grey" size={30}
                 style={{backgroundColor:"white",padding:10,paddingTop:15,borderTopRightRadius:50,borderBottomRightRadius:50}} />
      

    <View style={{padding:10,borderRadius:50,paddingRight:10}}>
             <TouchableOpacity onPress={()=>{sendMsg();setmsg("")}}>
             <Ionicons name='paper-plane' color="white" size={25}
                 style={{backgroundColor:"blue",borderRadius:50,padding:8}} />
             </TouchableOpacity>
    </View>
               
           
             

        </View>
          
    </View>
    )
}
const styleC=StyleSheet.create({
    chatContianer:{
        display:"flex",
      
      
        flexDirection:"column",
        justifyContent:'space-between',
        height:"auto",
        overflow:"scroll",
        backgroundColor:"#D1CCD2"
    },
    singleMsgR:{
      backgroundColor:"white",
      position:"relative",
      paddingLeft:8,
      paddingRight:8,
      margin:5,
      marginRight:80,
      marginTop:19,
      padding:4,
      width:180,
      borderRadius:10,
      display:"flex",
      flexDirection:"column"
      
    },
    msgText:{
        fontSize:18,
        color:"black",
        fontWeight:"400",
    },
    msgTime:{
        fontSize:12,
       
        color:"grey",
        alignSelf:"flex-end",
        fontWeight:"200",
    },
    msgName:{
        fontSize:14,
        color:"green",
        // marginTop:-25,
        // position:"absolute",
        
        fontWeight:"500",
    },
    singleMsgS:{
        backgroundColor:"rgba(37,211,102,0.3)",
        color:"black",
        fontWeight:"400",
        margin:10,
        marginLeft:80,
        
        marginRight:0,
        padding:4,
        paddingLeft:8,
        paddingRight:8,
        fontSize:18,
        width:180,
        // alignItems:"flex-end",
        borderRadius:10,
        display:"flex",
        flexDirection:"column",
        alignSelf:"flex-end"
        
    },
    bottomBar:{
   display:'flex',
   flexDirection:"row",
   justifyContent:"center",
   padding:15,
   position:"relative",marginBottom:0,
   
    }
})

export default ChatComponent;

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
      color:"white",
      fontWeight:"500",
      fontSize:18,
      fontFamily:"serif"
      
    },
    chatText1:{
      color:"white",
      fontWeight:"300",
      fontSize:15,
      fontFamily:"sans-serif"

      
      
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