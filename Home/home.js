import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,

} from 'react-native';

export default function Home({navigation}){

return(

    <View style={styles.container}>
 
        <View style={styles.botao}>
            <TouchableOpacity
            style={styles.atual}
            onPress={() => navigation.navigate('MapaAtual')}>
                <Text style={styles.texto}> Mapa Atual </Text>
            </TouchableOpacity>
        </View>
 
        <View style={styles.botao}>
            <TouchableOpacity
            style={styles.rota}
            onPress={() => navigation.navigate('MapaRota')}
            >
                <Text style={styles.texto}> Mapa Rota </Text>
            </TouchableOpacity>
        </View>
 
    </View>
    
);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e90ff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      botao:{
        color:'#ffff',
        
      },
      atual:{
        backgroundColor: "#ff4500",
       
      },
      rota:{
        backgroundColor: "#ff4500",
      },
      texto:{
        color:"white",
        fontSize:25,
        alignItems: 'center',
      }
    
});

