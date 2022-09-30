import React from 'react'
import { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native'
import axios from 'axios';
import Theme from '../Theme';
import StyledText from './StyledText';

const DailyTemperature = ({latitude, longitude}) => {
    const [forecast, setForecast] = useState([])

    useEffect(() => {
        if (latitude && longitude) {
            axios.get(`http://api.weatherapi.com/v1/forecast.json?key=850e57a3f1d74fbd9a1142055222909&q=${latitude},${longitude}&days=10`)
            .then(res => {
                setForecast(res.data.forecast.forecastday)
            })
            .catch(err => console.log(err))
        }
    }, [latitude && longitude])


    const RenderForecast = (forecast) => {
        let date = new Date(forecast.date)
        let day =  date.getDate()
        let month = date.getMonth()
        let monthString = ''

        switch (month) {
            case 0: monthString = 'Jan'
            break;
            case 1: monthString = 'Feb'
            break;
            case 2: monthString = 'Mar'
            break;
            case 3: monthString = 'Apr'
            break;
            case 4: monthString = 'May'
            break;
            case 5: monthString = 'Jun'
            break;
            case 6: monthString = 'Jul'
            break;
            case 7: monthString = 'Aug'
            break;
            case 8: monthString = 'Sep'
            break;
            case 9: monthString = 'Oct'
            break;
            case 10: monthString = 'Nov'
            break;
            case 11: monthString = 'Dec'
            break;

            default: monthString = ''
            break;
        }
        let actualDate =  monthString + ' ' + day

        return (
            <View key={forecast.date} style={styles.dayContainer}>
                <Text>{actualDate}</Text>
                <Image source={ { uri: `https:${forecast.day.condition.icon}` }} style={styles.tinyLogo}></Image>
                <StyledText color='secondary'>{forecast.day.maxtemp_c}° | {forecast.day.mintemp_c}°</StyledText>
            </View>
        )
    }
    
    return (
        <ScrollView contentContainerStyle={styles.container} horizontal={true}>
            {
                forecast.map((data, index) => { 
                    if (index > 0) {
                        return RenderForecast(data)
                    }
                })
            }
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

export default DailyTemperature