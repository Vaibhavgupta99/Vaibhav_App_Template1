import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

export default function Page1() {
  return (
    <>
    <View style={styles1.container}>
        <ImageBackground style={styles1.bg_img} source={require('./assets/images/Mountains.jpg')} >
            <View style={styles1.c1}>
                <View style={styles1.cc}></View>
                <View style={styles1.cc}></View>
            </View>
            <View style={styles1.c2}>

            </View>
        </ImageBackground>        
    </View>
    </>
  )
}

const styles1 = StyleSheet.create({
    container: {
        flex:1,
    },
    bg_img: {
        flex:1,
        resizeMode:'contain'
    },
    c1: {
        flex:.2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    c2: {
        flex:.8,
        backgroundColor:'blue',
    },
    cc: {
        height:50,
        width:50,
        backgroundColor:'rgba(0, 0, 0, 0.45);',
    }
})