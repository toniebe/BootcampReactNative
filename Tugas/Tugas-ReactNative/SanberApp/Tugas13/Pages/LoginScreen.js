import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button onPress={()=>navigation.navigate("MyDrawer",{
                screen:'App', params:{
                    screen:'AboutScreen'
                }
            })} title="Menuju Halaman HomeScreen" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
