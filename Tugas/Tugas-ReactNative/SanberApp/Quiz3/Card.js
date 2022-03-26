import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card({image,title,type,harga,description}) {
  return (
    <View style={{flex:1, borderWidth:1,borderColor:'#e4e4e4',marginBottom:10}}>
      <View style={styles.top}>
        <Image source={image} style={{width:100,height:100,borderRadius:100/2}} />
        <View style={{marginLeft:20}}>
            <Text style={{fontSize:18,fontWeight:'bold',marginVertical:5}}>{title}</Text>
            <Text style={{fontSize:12,color:'#e4e4e4',marginVertical:10}} >{type}</Text>
            <Text>Rp. {harga}</Text>
        </View>
      </View>
      <View style={{maxWidth: 300,paddingHorizontal:10}}>
        <Text >{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    top:{
        padding:20,
        // backgroundColor:'red',
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-around'
    }
})