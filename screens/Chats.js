import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import ContactRow from "../src/components/ContactRow";
import Separator from "./../src/components/Separator";
import firebase from "firebase";
const chats=[{
    user:["suleyman@gmail.com","a@gmail.com"],
    messages:[{}]
},
{
    user:["suleyman@gmail.com","b@gmail.com"],
    messages:[{}]
},
{
    user:["suleyman@gmail.com","c@gmail.com"],
    messages:[{}]
},
{
    user:["suleyman@gmail.com","d@gmail.com"],
    messages:[{}]
},
]
const Chats = ({ navigation }) => {
  useEffect(() => {
   firebase.auth().onAuthStateChanged((user)=>{
    if (!user) {
        navigation.navigate("SignUp");
      }
   })   
  }, []);
  const [chats,setChats]=useState([]);
  useEffect(() => {
    firebase.firestore().collection('chats').onSnapshot((snapshot)=>{setChats(snapshot.docs)})
   }, []);
  return (
    <SafeAreaView>
        {chats.map((chat,index)=>(
        <React.Fragment key={index}>
        <ContactRow
                name={chat.user.filter(()=>x!==firebase.auth().currentUser?.email)[0]}
                subtitle="No Messaged"
                onPress={() => {
                    navigation.navigate('Chat');
                }}
            />
        </React.Fragment>
        ))}
      
      <Separator />
      <View style={styles.serprator} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Chats;

