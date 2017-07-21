const request = require('request');
const yargs = require('yargs');
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

var encodedAddress = encodeURIComponent(argv.address);

request({
  url: `http://maps.googleapis.com/maps/api/geocode/json?address= ${encodedAddress}` ,
  json: true
}, (error, response, body) => {
  //3 parametro é a quantidade de espaços
  //console.log(JSON.stringify(response, undefined, 2));
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
});
