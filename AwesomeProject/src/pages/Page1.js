import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { AntDesign, Feather  } from '@expo/vector-icons';

export default function Page1({navigation}) {

    const [isLoaded] = useFonts({
        "RubikBrokenFax":require("./fonts/RubikBrokenFax-Regular.ttf"),
        'DancingScript':require('./fonts/DancingScript-VariableFont_wght.ttf'),
        'Slabo':require('./fonts/Slabo27px-Regular.ttf')
      }); 
      
      if (!isLoaded) {
        return null;
      }

  return (
    <>
    <View style={styles1.container}>
        <ImageBackground style={styles1.bg_img} source={require('./assets/images/Mountains.jpg')} >
            <View style={styles1.c1}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
                    <View style={styles1.cc}>
                        <AntDesign style={{fontSize:30,color:'whitesmoke'}} name="left" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <View style={styles1.cc}>
                    <Feather name="search" size={24} color="whitesmoke" />
                </View>
            </View>
            <View style={styles1.c2}>
                <View style={styles1.c3}>
                    <Text style={[styles1.txt1,{fontFamily:'RubikBrokenFax'}]}>Enjoy the World {'\n'}and lifestyle</Text>
                    <Text style={[styles1.txt2, {fontFamily:'Slabo'}]}>INDIA</Text>
                </View>
                <View style={styles1.c4}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{}}>
                        <View style={styles1.scroll}>
                            <ImageBackground style={styles1.img_round} source={require('./assets/images/img1.jpg')}></ImageBackground>
                        </View>
                        <View style={styles1.scroll}>
                            <ImageBackground style={styles1.img_round} source={require('./assets/images/img6.jpg')}></ImageBackground>
                        </View>
                        <View style={styles1.scroll}>
                            <ImageBackground style={styles1.img_round} source={require('./assets/images/img8.jpg')}></ImageBackground>
                        </View>
                        <View style={styles1.scroll}>
                            <ImageBackground style={styles1.img_round} source={require('./assets/images/img7.jpg')}></ImageBackground>
                        </View>
                        <View style={styles1.scroll}>
                            <ImageBackground style={styles1.img_round} source={require('./assets/images/img4.jpg')}></ImageBackground>
                        </View>
                        <View style={styles1.scroll}>
                            <ImageBackground style={styles1.img_round} source={require('./assets/images/img5.jpg')}></ImageBackground>
                        </View>
                        <View style={styles1.scroll}>
                            <ImageBackground style={styles1.img_round} source={require('./assets/images/img2.jpg')}></ImageBackground>
                        </View>
                        <View style={styles1.scroll}>
                            <ImageBackground style={styles1.img_round} source={require('./assets/images/img3.jpg')}></ImageBackground>
                        </View>
                        <View style={styles1.scroll}>
                            <ImageBackground style={styles1.img_round} source={require('./assets/images/img9.jpg')}></ImageBackground>
                        </View>
                        <View style={styles1.scroll}>
                            <ImageBackground style={styles1.img_round} source={require('./assets/images/img10.jpg')}></ImageBackground>
                        </View>
                    </ScrollView>
                </View>
                <View style={{paddingHorizontal:20,}}>
                    <Text style={[styles1.txt1, {fontFamily:'DancingScript', color:'#2b0000'}]}>Explore World</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('P2')}} style={styles1.c5}>
                        <AntDesign name="arrowright" size={24} color="#FE9A06" />
                    </TouchableOpacity>
                </View>
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
    img_round: {
        flex:1,
        height:60,
        width:60,
    },
    c1: {
        flex:.2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    cc: {
        height:50,
        width:50,
        backgroundColor:'rgba(0, 0, 0, 0.45);',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    c2: {
        flex:.8,
        justifyContent:'flex-end',
        paddingVertical:50,
        paddingHorizontal:10,
    },
    c3: {
        backgroundColor:'rgba(0, 0, 0, 0.5);',
        padding:10,
        borderRadius:10,
    },
    c4: {
        height:80,
        width:'100%',
        backgroundColor:'rgba(0, 0, 0, 0.45);',
        marginVertical:20,
        borderRadius:60,
        justifyContent:'center',
        paddingHorizontal:10,
        paddingVertical:10,
        overflow:'hidden'
    },
    c5: {
        height:50,
        width:50,
        backgroundColor:'rgba(0, 0, 0, 0.5);',
        borderRadius:25,
        position:'absolute',
        left:215,
        justifyContent:'center',
        alignItems:'center',
    },
    txt1: {
        color:'white',
        fontSize:28,
    },
    txt2: {
        color:'whitesmoke',
        fontSize:16,
        marginTop:10,
    },
    scroll: {
        height:60,
        width: 60,
        borderRadius:30,
        marginHorizontal:5,
        overflow:'hidden',
        borderWidth:1,
        borderColor:'whitesmoke'
    }
})