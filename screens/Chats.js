import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React,{useEffect} from 'react';
import {Ionicons} from '@expo/vector-icons';
import ContactRow from '../src/components/ContactRow';
import Separator from './../src/components/Separator';


const Chats=({navigation})=>{
useEffect(()=>{
    const isLoggedIn=false;
    if(!isLoggedIn){
        navigation.navigate('SignUp');
    }
},[]);
    return(
        <SafeAreaView >
            <ContactRow name="Süleyman Aslan" subtitle="React Native Course" onPress={()=>{ alert("Hi,")}}/>
            <Separator/>
            <ContactRow name="Pamuk Aslan" subtitle="React Native" onPress={()=>{ alert("Hi,")}}/>
            <View style={styles.serprator}/>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({   
   
})

export default Chats;
