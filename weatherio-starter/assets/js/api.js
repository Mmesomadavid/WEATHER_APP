/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

const api_key = "4d82d6345ca70ea40cd054e7b8d141a4";


/**
 * Fetch data from server
 * *@param {string} URL API url
 * *@param {Function} callback callback
 */

export const fetchData = function(URL, callback) {
    fetch('${URL}&appid=${api_key}')
    .then(res => res.json())
    .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon) {
        return 'https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric'
    },
    forecast(lat, lon) {
        return 'https://api.openweathermap.org/data/2.5/forecast?${lat} &${lon}&units=metric'
    },
    airPollution(lat, lon) {
        return 'https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}'
    },
    reverseGeo(lat, lon) {
        return
    }
}