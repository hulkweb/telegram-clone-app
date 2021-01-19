import React,{useState} from 'react'
import { View,Text, StyleSheet, Button } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { min } from 'react-native-reanimated';

import { SafeAreaView } from 'react-native-safe-area-context';
import { actiontypes } from '../reducer';
import { useStateValue } from '../StateProvider';
function LoginScreen() {
    const [userName, setuserName] = useState("");
    const [mobile, setmobile] = useState("");
   const [password, setpassword] = useState("");
   const [{user,basket},dispatch]=useStateValue();

 const handleRegister=()=>{
    fetch("https://backend-fb-hulkweb.herokuapp.com/user/signup",{
        method:'POST',
         body:JSON.stringify({
userName,mobile,password
        }),
    
    headers: {'Content-Type': 'application/json'}})
        .then((reponse)=>{
           return reponse.json();
        }).then((re)=>{console.log(re.msg);
      dispatch({type:actiontypes.SET_USER,user:re.user})
        }).catch((err)=>{
            console.log(err);
        });
  }
   
    const handlePost=()=>{
        console.log("posted");
        fetch("https://backend-fb-hulkweb.herokuapp.com/user/login",{
            method:'POST',
             body:JSON.stringify({
  mobile,password
            }),
        
    
        headers: {'Content-Type': 'application/json'}})
            .then((reponse)=>{
               return reponse.json();
            }).then((re)=>{console.log(re.msg);
                
          dispatch({type:actiontypes.SET_USER,user:re.user})
            }).catch((err)=>{
                console.log(err);
            });
   
    

         
    }
    return (
        <ScrollView style={{flex:1,display:"flex",flexDirection:"column"}}>
          <ScrollView style={{display:"flex",flexDirection:"column",height:"auto",alignSelf:"center",flex:1,marginTop:200}}>
              <Text style={{fontFamily:"serif",fontSize:29,paddingBottom:20,color:"#668FD4",textAlign:"center"}}>Telegram</Text>
          <TextInput multiline={true} placeholder="your name" onChangeText={(text)=>{setuserName(text)}} style={styles.input1} />
          <TextInput multiline={true} placeholder="Mobile Number" dataDetectorTypes={'phoneNumber'} onChangeText={(text)=>{setmobile(text)}} style={styles.input1} />
          <TextInput multiline={true}  passwordRules="min-lenght:4" placeholder="password" onChangeText={(text)=>{setpassword(text)}} style={styles.input1} />
          <View style={{paddingLeft:80,paddingRight:80}}>
              <View style={{paddingBottom:10,padding:10}}>
              <Button title="Login" onPress={handlePost} color="blue"/>
              </View>
        
          <Button title="Register" onPress={handleRegister} color="green"/>
          </View>
       
          
       </ScrollView>
        </ScrollView>
      
    )
}
const styles=StyleSheet.create({
    input1:{
 height:50,
width:300,
 margin:10,
 borderRadius:10,
 borderColor:"grey",
 borderWidth:1,
 alignSelf:"center",
 padding:10
    },
    input2:{
        height:80,
       width:300,
        margin:10,
        borderRadius:10,
        borderColor:"grey",
        borderWidth:1,
        alignSelf:"center", padding:10
           }
})
export default LoginScreen
