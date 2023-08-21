import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../src/config/constants';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Cell=({icon,title,tintcolor,onPress,style})=>{
    return(
        <TouchableOpacity style={[styles.cell,style]} onPress={onPress}>
        <View style={[styles.iconContainer,{backgroundColor:tintcolor}]}>
          <Ionicons name={icon} size={24} color={'white'}/>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name="chevron-forward-outline" size={20}/>
      </TouchableOpacity>
    )
}

export default Cell;

const styles = StyleSheet.create({   
    title:{
      fontSize:16,
      marginStart:16,
      flex:1,
    },
    cell:{
      paddingHorizontal:16,
      paddingVertical:12,
      flexDirection:'row',
      alignItems:'center',
      paddingVertical:12,
      borderBottomWidth:StyleSheet.hairlineWidth,
      backgroundColor:colors.border,
    },
    iconContainer:{
      width:32,
      height:32,
      borderRadius:6,
      backgroundColor:colors.red,
      justifyContent:'center',
      alignItems:'center',
    }
  });
  