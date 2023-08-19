import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Separator=()=>{
    return(<View style={styles.serprator}/>)
}

const styles=StyleSheet.create({   
    serprator:{
        height:StyleSheet.hairlineWidth,
        backgroundColor:"#E2E2E2",
        marginStart:88,
    }
})

export default Separator;