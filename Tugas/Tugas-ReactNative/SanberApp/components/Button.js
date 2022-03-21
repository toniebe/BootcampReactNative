import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function Button({bgColor,textColor,text,...nativeProps}) {
  return (
    <TouchableOpacity style={[{backgroundColor:bgColor},styles.button]} {...nativeProps}>
        <Text style={{fontSize:14,color:textColor}}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        // flex:1,
        paddingVertical:10,
        paddingHorizontal:20,
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    }
})