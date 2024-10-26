import React, { useState, useEffect, useRef } from 'react';
import {Text,View} from 'react-native';

import 'react-native-get-random-values';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { css } from '../assets/css/Css';
import config from '../config/index.json';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';

export default function App(){
  const[origin,setOrigin] = useState(null);
  const[destination,setDestination] = useState(null);
  const mapEl=useRef(null);
  const[distance,setDistance] = useState(null);

  useEffect(()=>{
    (async function(){      
      let { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421
            })
        } else {
            throw new Error('Location permission not granted');
        }
    })();
},[]);

return(
    <View style={css.container}> 
       <MapView
         style={css.map}
         initialRegion={origin}
         showsUserLocation={true}
         zoomEnabled={true}
         loadingEnabled={true} 
         ref={mapEl}
       >
</MapView>

       <View style={css.search}></View>
    </View>  
  )
}
