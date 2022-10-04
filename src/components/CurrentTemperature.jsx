import React from 'react'
import { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Platform, NativeModules, TouchableHighlight } from 'react-native'
import StyledText from './StyledText';
import Theme from '../Theme';
import MainIcon from './MainIcon';
import { Separator } from './Icons';

const CurrentTemperature = ({weatherData, locationData, latitude, longitude, weatherDataCondition, setLatitude, setLongitude}) => {
    const [text, setText] = useState(null)

    useEffect(() => {
        setText(weatherDataCondition.text)
    }, [weatherDataCondition])

    useEffect(() => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let today  = new Date();
        
        const deviceLanguage =
            Platform.OS === 'ios'
                ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
                : NativeModules.I18nManager.localeIdentifier;

        let date = today.toLocaleDateString(deviceLanguage, options)
    }, [])

    let temp = 'Loading.',
        feelslike = 'Loading..',
        currentLocation = 'Loading...'

    if (latitude && longitude && weatherData != null) {
        let locationString = JSON.stringify(locationData.name)
        
        temp = JSON.stringify(weatherData.temp_c); 
        feelslike = JSON.stringify(weatherData.feelslike_c)
        if (locationString) {
            currentLocation = locationString.replace(/"/g, '')
        }
    }
    
    return (
        <View style={styles.mainContainer}>
            <View style={styles.currentContainer}>
                <StyledText fontSize='medium' fontWeight='bold' color='primary'>{currentLocation}</StyledText>
                <StyledText color='primary' fontSize='xxxl'>{temp + '°'}</StyledText>
                <MainIcon weatherDataCondition={weatherDataCondition} width={100}></MainIcon>
            </View>

            <View style={styles.tempContainer}>
                <StyledText>{text} | </StyledText>
                <StyledText>{feelslike + '°C'}</StyledText>
            </View>

            <TouchableHighlight onPress={() => {setLatitude(51.52), setLongitude(-0.11)}}>
                <StyledText>Cambiar ubicación</StyledText>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {setLatitude(null), setLongitude(null)}}>
                <StyledText>Volver a ubicacion actual?</StyledText>
            </TouchableHighlight>

            <Separator></Separator>
        </View>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 350,
        height: 250,
    },

    mainContainer: {
        alignItems: "center",
        justifyContent: 'space-around',
        flex: 1,
        width: '100%',
        backgroundColor: Theme.colors.mainBackground,
        paddingTop: 30
    },

    currentContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1
    },

    tempContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
});

export default CurrentTemperature