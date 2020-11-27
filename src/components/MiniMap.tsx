import Geolocation from '@react-native-community/geolocation';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Location from './Location';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default () => {
    let watchID = 0

    const [geoPosition, setGeoPosition] = useState({})

    watchID = Geolocation.watchPosition(position => {
        const lastPosition = JSON.stringify(position);
        setGeoPosition(position);
    });

    return (

        <View style={styles.container}>
            <Location />
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                showsUserLocation={true}
                region={{
                    latitude: geoPosition?.coords?.latitude ?? 41.156955,
                    longitude: geoPosition?.coords?.longitude ?? -8.629539,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
        </View>
    )
}