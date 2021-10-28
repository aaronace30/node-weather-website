const request = require('request')
const chalk = require('chalk')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=61dd628ab443a83a4c4577a15daa51d4&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback(chalk.red.inverse('Unable to connect to weather service!'), undefined)
        } else if (body.error) {
            callback(chalk.red.inverse('Unable to find location...'), undefined)
        } else {
            // callback(undefined, {
            //     //description: body.current.weather_descriptions,
            //     temperature: body.current.temperature,
            //     feelsLikeTemperature: body.current.feelslike
            // })
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain.')
            // callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast