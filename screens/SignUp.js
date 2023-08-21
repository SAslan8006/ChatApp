import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from './../src/config/constants';
import Button from '../src/components/Button';

 const SignUp=()=> {
  return (
    <View style={styles.container}>
    <SafeAreaView>
        <View style={styles.contentContainer}>
        <Text style={styles.title}>Create new acount</Text>
        <TextInput style={styles.input} placeholder='Enter Your Name'/>
        <TextInput style={styles.input} placeholder='Enter Your email'/>
        <TextInput style={styles.input} placeholder='Enter Your Password'/>
        <View style={styles.buttonsContainer}> 
           <Button title="Sign In" varient="secondary" /> 
           <Button title="Sign Up" varient="primary" /> 
           
        </View>
        </View>
    </SafeAreaView>
    </View>

  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        flex:1,
    },
    title:{
        fontSize:36,
        color:"white",
        fontWeight:"800",
    },
    contentContainer:{
        padding:32,
    },
    input:{
        backgroundColor:"white",
        fontSize:15,
        marginTop:16,
        paddingHorizontal:16,
        paddingVertical:14,
        borderRadius:6,
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent:'space-between' ,
        marginTop:32,

    },
})

export default SignUp;
