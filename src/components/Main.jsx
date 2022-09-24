import React from 'react'
import { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, Image} from 'react-native'
import * as Location from 'expo-location';
import axios from 'axios';
import Constants from 'expo-constants'
import CurrentTemperature from './CurrentTemperature';
import DailyTemperature from './DailyTemperature';

const Main = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [weatherData, setWeatherData] = useState([])
    const [weatherDataCondition, setWeatherDataCondition] = useState([])
    const [locationData, setLocationData] = useState([])

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }
            let location = await Location.getCurrentPositionAsync({});

            setLocation(location);

            axios.get(`http://api.weatherapi.com/v1/current.json?key=25ffce30f8954ed7aad223704221509&q=${location.coords.latitude},${location.coords.longitude}`)
            .then(res => {
                if (location) {
                    setWeatherData(res.data.current)
                    setWeatherDataCondition(res.data.current.condition)
                    setLocationData(res.data.location)
                }
            })
            .catch(err => console.log(err))
            }
        )();
    }, []);


    return (
        <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
            <CurrentTemperature location={location} weatherData={weatherData} locationData={locationData} weatherDataCondition={weatherDataCondition} />
            <DailyTemperature location={location} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#d1d5de",
        flex: 1,
    },
});


export default Main