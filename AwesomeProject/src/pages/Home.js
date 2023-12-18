import { View, Text, TouchableOpacity, Button, Image } from 'react-native'
import React from 'react'
import styles from './assets/css/style'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';



export default function Home({navigation}) {

  const [isLoaded] = useFonts({
    "RubikBrokenFax":require("./fonts/RubikBrokenFax-Regular.ttf"),
  }); 
  
  if (!isLoaded) {
    return null;
  }
  return (
    <>
    <View style={styles.container}> 
        <View style={styles.c1}>
            <Image source={require('./assets/images/Travel1.png')} />
            <Text style={[styles.txt, {fontFamily:'RubikBrokenFax'}]}>Travel</Text>
        </View>
        <View style={styles.c2}>
            <TouchableOpacity onPress={() => navigation.navigate('P1')}><Text style={styles.btn}>Lets Go</Text></TouchableOpacity>
        </View>
    </View>
    </>
  )
}