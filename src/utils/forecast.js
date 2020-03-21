const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e218db533084561116deff7939a29f2d/' + latitude + ',' + longitude +'?units=si&lang=en'

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service.', undefined)
        } else if(response.body.error) {
            callback('Unable to find loaction', undefined)
        } else {
            callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. The high today is ${response.body.daily.data[0].temperatureHigh} with a low of ${response.body.daily.data[0].temperatureLow}. There is a ${response.body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast