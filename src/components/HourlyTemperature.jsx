import React from 'react'
import { useState, useEffect } from 'react'
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native'
import axios from 'axios';
import Theme from '../Theme';
import StyledText from './StyledText';

const HourlyTemperature = ({latitude, longitude}) => {
    const [forecast, setForecast] = useState([])
    const [timezone, setTimezone] = useState([])

    useEffect(() => {
        if (latitude && longitude) {
            axios.get(`http://api.weatherapi.com/v1/forecast.json?key=850e57a3f1d74fbd9a1142055222909&q=${latitude},${longitude}&days=2`)
            .then(res => {
                setForecast(res.data.forecast.forecastday)
            })
            .catch(err => console.log(err))


            axios.get(`http://api.geonames.org/timezoneJSON?lat=${latitude}&lng=${longitude}&username=FacuDambo`)
            .then(res => {
                setTimezone(res.data.time)
            })
            .catch(err => console.log(err))
        }
    }, [latitude && longitude])

    const RenderHour = (hour, index) => {
        let fullDate = hour.time
        let newDate = fullDate.replace(' ', 'T')
        if (timezone) {
            let newDate = timezone.replace(' ', 'T')
            let time = new Date(newDate)
            var localTime = time.getUTCHours() < 10 ? '0' + time.getUTCHours() : time.getUTCHours()
            var localDay = time.getUTCDate() 
        }

        let recievedDate = new Date(newDate)
        let recievedDay = recievedDate.getUTCDate()
        let recievedHour = recievedDate.getUTCHours() < 10 ? '0' + recievedDate.getUTCHours() : recievedDate.getUTCHours()
        let recievedMinutes = recievedDate.getUTCMinutes() + '0'
        let actualHour = recievedHour + ":" + recievedMinutes

        if (localDay === recievedDay && localTime < recievedHour) {
            return (
                <View style={styles.dayContainer} key={index}>
                    <Text>{actualHour}</Text>
                    <Image source={ { uri: `https:${hour.condition.icon}` }} style={styles.tinyLogo}></Image>
                    <StyledText color='secondary'>{hour.temp_c}°</StyledText>
                </View>
            )
        } else if (localDay !== recievedDay){
            return (
                <View style={styles.dayContainer} key={index}>
                    <Text>{actualHour}</Text>
                    <Image source={ { uri: `https:${hour.condition.icon}` }} style={styles.tinyLogo}></Image>
                    <StyledText color='secondary'>{hour.temp_c}°</StyledText>
                </View>
            )
        }
    }

    const MapHour = (forecast, index) => {
        return (
            <View style={styles.container} key={index}>
                { forecast.map( (hour, index) => { return RenderHour(hour, index) })}
            </View>
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.container} horizontal>
            { forecast.map((data, index) => { return MapHour(data.hour, index) }) }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.colors.secondaryBackground,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    dayContainer: {
        padding: 5,
        alignItems: 'center'
    },

    tinyLogo: {
        width: 50,
        height: 50,
    },

    midText: {
        fontSize: 52,
    },
});

export default HourlyTemperature