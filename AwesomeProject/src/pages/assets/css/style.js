import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    c1: {
        flex:.8,
        justifyContent:'center',
        alignItems:'center',
    },
    c2: {
        flex:.2,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    btn: {
        backgroundColor:'#680244',
        color:'#fff',
        textAlign:'center',
        paddingHorizontal:100,
        paddingVertical:15,
        borderRadius:50,
    },
    txt: {
        color:'#680244',
        fontSize:35,
        fontWeight:"bold",
    },
})

export default styles;