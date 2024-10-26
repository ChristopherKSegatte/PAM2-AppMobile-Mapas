import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Home/home';
import MapaAtual from '../MapaAtual/mapaLocalizacaoAtual';
import MapaRota from '../MapaRota/mapaRota';

const Stack = createNativeStackNavigator();

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>   

            <Stack.Screen name="Home" component={Home} /> 
            <Stack.Screen name="MapaAtual" component={MapaAtual} />                     
            <Stack.Screen name="MapaRota" component={MapaRota} /> 
          
        </Stack.Navigator>
    )

}

function AppRoutes(){
    return(
        <NavigationContainer>
        <StackNavigator/> 
      </NavigationContainer>
    )
}

export default AppRoutes;