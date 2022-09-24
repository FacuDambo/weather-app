import React from 'react'
import { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native'
import axios from 'axios';

const DailyTemperature = ({location}) => {
    const [forecast, setForecast] = useState([])

    useEffect(() => {
        if (location) {
            axios.get(`http://api.weatherapi.com/v1/forecast.json?key=25ffce30f8954ed7aad223704221509&q=${location.coords.latitude},${location.coords.longitude}&days=7`)
            .then(res => {
                setForecast(res.data.forecast.forecastday)
            })
            .catch(err => console.log(err))
        }
    }, [location])


    const RenderForecast = (forecast) => {
        
        
        return (
            <View>
                <Text>{forecast.date}</Text>
                <Image source={ { uri: `https:${forecast.day.condition.icon}` }} style={styles.tinyLogo}></Image>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            {
                forecast.map((data) => {return RenderForecast(data)})
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    midText: {
        fontSize: 52,
    },
});

export default DailyTemperature