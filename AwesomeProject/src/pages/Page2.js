import { View, Text, StyleSheet, TextInput, ImageBackground, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Feather, FontAwesome5, Ionicons, FontAwesome, MaterialIcons , Entypo,  } from '@expo/vector-icons';


export default function Page2() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.c1}>
        <View style={styles.c4}>
            <ImageBackground style={{flex:1,}} source={require('./assets/images/Mountains.jpg')}></ImageBackground>
          </View>
          <TextInput style={styles.input} placeholder='Search' />
          <Feather style={{position:'relative', bottom:35, left:10, width:'8%'}} name="search" size={24} color="black" />
          <FontAwesome5 style={{position:'relative', bottom:60, left:250,}} name="microphone-alt" size={24} color="black" />
          
        </View>
        <View style={styles.c2}>
          <View style={{}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity>
              <View style={styles.scroll}>
                <Text style={styles.txt}><Ionicons style={styles.icon} name="location-sharp" size={22} color="whitesmoke" /> Place</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.scroll}>
                <Text style={styles.txt}><FontAwesome name="hotel" size={25} color="whitesmoke" /> Hotel</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.scroll}>
                <Text style={styles.txt}><MaterialIcons name="flight" size={22} color="whitesmoke" /> Travel</Text>
              </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <View style={styles.c3}>
          <Text style={styles.txt2}>You will be instrested</Text>
          <View style={[styles.cc, {flexDirection:'row',}]}>
            <View style={styles.cc1}>
              <ImageBackground style={[styles.img, styles.shadow]} source={require('./assets/images/bg3.jpg')}></ImageBackground>
            </View>
            <View style={styles.cc1}>
              <View style={[styles.cc2, {flex:.8, overflow:'hidden'}]}>
                <ImageBackground style={styles.img} source={require('./assets/images/bg4.jpg')}></ImageBackground>
              </View>
              <View style={[styles.cc2, {flexDirection:'row',flex:.2,}]}>
                <View style={[styles.cc3, {backgroundColor:'#67461D'}]}>
                  <Entypo name="dots-three-horizontal" size={24} color="whitesmoke" />
                </View>
                <View style={styles.cc3}>
                  <FontAwesome5 name="facebook" size={24} color="gray" />
                </View>
                <View style={styles.cc3}>
                  <FontAwesome5 name="google" size={24} color="gray" />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cc}>
            <ImageBackground style={[styles.img, styles.shadow]} source={require('./assets/images/bg2.jpg')}></ImageBackground>
          </View>
        </View>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  c1: {
    flex:.2,
    justifyContent:'flex-end',
    paddingHorizontal:20,
  },
  c2: {
    flex:.1,
    justifyContent:'center',
  },
  c3: {
    flex:.7,
    padding:20,
  },
  input: {
    paddingHorizontal:45,
    paddingVertical:8,
    width:'80%',
    backgroundColor:'whitesmoke',
    fontSize:18,
    borderRadius:6,
    elevation:5,
  },
  c4: {
    height:50,
    width:50,
    backgroundColor:'red',
    borderRadius:10,
    position:'relative',
    overflow:'hidden',
    top:48,
    left:300,
  },
  scroll: {
    backgroundColor:'#680244',
    paddingHorizontal:40,
    paddingVertical:20,
    borderRadius:50,
    marginHorizontal:5,
    elevation:5,
  },
  txt: {
    fontSize:18,
    color:'whitesmoke',
    fontWeight:'bold,'
  },
  icon: {
    elevation:5,
  },
  txt2: {
    fontWeight:'bold',
    fontSize:16,
  },
  cc: {
    flex:1,
    margin:5,
    borderRadius:20,
    overflow:'hidden',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0+
    
  },
  cc1: {
    flex:1,
    margin:5,   
    borderRadius:20, 
    overflow:'hidden',
  },
  cc2: {
    margin:5,
    borderRadius:20,
  },
  cc3: {
    flex:1,
    backgroundColor:'lightgray',
    height:40,
    borderRadius:50,
    margin:5,
    justifyContent:'center',
    alignItems:'center',
  },
  img: {
    flex:1,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation:5,
  }
})