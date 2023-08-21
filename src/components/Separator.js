import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../config/constants'

const Separator=()=>{
    return(<View style={styles.serprator}/>)
}

const styles=StyleSheet.create({   
    serprator:{
        height:StyleSheet.hairlineWidth,
        backgroundColor:colors.border,
        marginStart:88,
    }
})

export default Separator;