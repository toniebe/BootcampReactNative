import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({colorText,label,placeholder,...nativeProps}) {
  return (
    <View>
      <Text style={{fontSize:14,color:colorText}}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} {...nativeProps} />    
      </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#78BC61',
        padding: 10,
        margin: 10,
        backgroundColor:'white',
        borderRadius:5,
    }
})