import React from 'react'
import * as All from './Icons'

const MainIcon = ({weatherDataCondition}) => {
    if (weatherDataCondition.text === 'Clear') {return (<All.Night />)}
    if (weatherDataCondition.text === 'Sunny') {return (<All.Day />)}
    if (weatherDataCondition.text === "Cloudy" || "Overcast" || "Mist" || "Fog" || "Freezing fog") {return (<All.Clowdy />)}
    if (weatherDataCondition.text === "Patchy rain possible" || "Patchy rain possible" || "Patchy snow possible" || "Patchy sleet possible" || "Patchy freezing drizzle possible" || 'Partly cloudy') {return (<All.ClowdyDay1 />)}
    
    if (weatherDataCondition.text === "Thundery outbreaks possible" || "Patchy light rain with thunder" || "Moderate or heavy rain with thunder" || "Patchy light snow with thunder" || "Moderate or heavy snow with thunder" ) {return (<All.Thunder />)}
    if (weatherDataCondition.text === "Patchy light drizzle" || "Light drizzle" || "Moderate rain at times") {return (<All.Rainy1 />)}
    if (weatherDataCondition.text === "Patchy light rain" || "Light rain" || "Moderate rain" || "Light sleet") {return (<All.Rainy2 />)}
    if (weatherDataCondition.text === "Heavy rain at times" || "Heavy rain" || "Moderate or heavy sleet") {return (<All.Rainy3 />)}
    if (weatherDataCondition.text === "Light rain shower" || "Light sleet showers" || "Light showers of ice pellets") {return (<All.Rainy4 />)}
    if (weatherDataCondition.text === "Moderate or heavy rain shower" || "Moderate rain" ) {return (<All.Rainy5 />)}
    if (weatherDataCondition.text === "Moderate or heavy sleet showers" || "Moderate or heavy showers of ice pellets") {return (<All.Rainy6 />)}
    if (weatherDataCondition.text === "Torrential rain shower") {return (<All.Rainy7 />)}
    
    if (weatherDataCondition.text === "Blowing snow" || "Freezing drizzle" || "Light freezing rain" || "Patchy light snow" || "Ice pellets") {return (<All.Snowy1 />)}
    if (weatherDataCondition.text === "Heavy freezing drizzle" || "Light snow" || "Moderate snow" || "Light snow showers") {return (<All.Snowy2 />)}
    if (weatherDataCondition.text === "Patchy moderate snow" || "Moderate or heavy snow showers") {return (<All.Snowy3 />)}
    if (weatherDataCondition.text === "Moderate or heavy freezing rain" || "Moderate or heavy snow showers") {return (<All.Snowy4 />)}
    if (weatherDataCondition.text === "Heavy snow") {return (<All.Snowy5 />)}
    if (weatherDataCondition.text === "Blizzard") {return (<All.Snowy6 />)}
}

export default MainIcon