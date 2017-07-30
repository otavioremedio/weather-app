const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    logger(errorMessage, results);

    if (results) {
      weather.getWeather(results.latitude, results.longitude, (errorMessage, results) =>{
        logger(errorMessage, results);
      });
    }
});

var logger = (errorMessage, results) => {
    if (errorMessage) {
      console.log(errorMessage);
    } else {
      console.log(JSON.stringify(results, undefined, 2));
    }
}

//teza@storj99.top
//

//https://api.darksky.net/forecast/47f4f37bbe36fc88df571344ff772f4c/39.9396284,-75.18663959999999
