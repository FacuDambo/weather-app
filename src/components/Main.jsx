import React from 'react'
import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View} from 'react-native'
import * as Location from 'expo-location';
import axios from 'axios';
import Constants from 'expo-constants'
import CurrentTemperature from './CurrentTemperature';
import DailyTemperature from './DailyTemperature';
import HourlyTemperature from './HourlyTemperature';

const Main = () => {
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [weatherData, setWeatherData] = useState([])
    const [weatherDataCondition, setWeatherDataCondition] = useState([])
    const [locationData, setLocationData] = useState([])

    useEffect(() => {
        (async () => {
            await Location.requestForegroundPermissionsAsync();
            let location = await Location.getCurrentPositionAsync({});
            if (longitude === null && longitude === null) {
                setLatitude(location.coords.latitude)
                setLongitude(location.coords.longitude)
            }

            if (latitude && longitude) {
                axios.get(`http://api.weatherapi.com/v1/current.json?key=850e57a3f1d74fbd9a1142055222909&q=${latitude},${longitude}`)
                .then(res => {
                    setWeatherData(res.data.current)
                    setWeatherDataCondition(res.data.current.condition)
                    setLocationData(res.data.location)
                })
                .catch(err => console.log(err))
            }
        }
        )();
    }, [longitude && latitude]);

    return (
        <View style={styles.container2}>
            <ScrollView contentContainerStyle={styles.container}>
                <CurrentTemperature latitude={latitude} 
                                    longitude={longitude} 
                                    weatherData={weatherData} 
                                    locationData={locationData} 
                                    weatherDataCondition={weatherDataCondition} 
                                    setLatitude={setLatitude}
                                    setLongitude={setLongitude}/>
                <HourlyTemperature longitude={longitude} latitude={latitude} />
                <DailyTemperature latitude={latitude} longitude={longitude} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flexGrow: 1, 
        alignItems: 'center',
    },
    container2: {
        flexGrow: 1,
    }
});


export default Main