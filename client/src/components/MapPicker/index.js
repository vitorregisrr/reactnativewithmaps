import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView from 'react-native-maps';

const MapPicker = props => {

    return (
        <View>
            <MapView
                style={props.sm ? styles.mapSM : styles.map}
                onPress={(e) => props.setMap(e.nativeEvent.coordinate)}
                loadingEnabled={true}
                region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
            }}>
                <MapView.Marker
                    coordinate={
                    {latitude: props.currMarker.latitude || 37.78825,
                    longitude: props.currMarker.longitude ||  -122.4324}}/>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        height: 400,
        width: 450,
        marginTop: -60,
        marginBottom: 20
    },
    mapSM: {
        height: 200,
        width: 250,
        marginTop: 0,
        marginBottom: 20
    }
});

export default MapPicker;