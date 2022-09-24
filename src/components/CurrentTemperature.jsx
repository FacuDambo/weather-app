import React from 'react'
import { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Platform, NativeModules } from 'react-native'

const CurrentTemperature = ({weatherData, locationData, location, weatherDataCondition}) => {
    const [text, setText] = useState(null)
    const [date, setDate] = useState(null)
    const [url, setUrl] = useState('')
    
    useEffect(() => {
        setText(weatherDataCondition.text)
        setUrl(weatherDataCondition.icon)

        console.log(text);
    }, [weatherDataCondition])

    useEffect(() => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let today  = new Date();
        
        const deviceLanguage =
            Platform.OS === 'ios'
                ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
                : NativeModules.I18nManager.localeIdentifier;

        let date = today.toLocaleDateString(deviceLanguage, options)
        setDate(date)
    }, [])
    


    let temp = 'Loading.',
        feelslike = 'Loading..',
        currentLocation = 'Loading...'

    if (location && weatherData != null) {
        let locationString = JSON.stringify(locationData.name)
        
        temp = JSON.stringify(weatherData.temp_c); 
        feelslike = JSON.stringify(weatherData.feelslike_c)
        if (locationString) {
            currentLocation = locationString.replace(/"/g, '')
        }
    }
    
    return (
        <View>
            <View style={styles.mainContainer}>
                <Text>{date}</Text>
                <Text style={styles.midText}>{currentLocation}</Text>
                <Image source={ { uri: `https:${url}` }} style={styles.tinyLogo}></Image>
                <Text style={styles.bigText}>{temp + '°C'}</Text>
            </View>

            <Text>{text}</Text>
            <Text>{feelslike + '°C'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 250,
        height: 250,
    },
    bigText: {
        fontSize: 72,
    },
    midText: {
        fontSize: 52,
    },  
    mainContainer: {
        alignItems: "center",
    }
});

export default CurrentTemperature