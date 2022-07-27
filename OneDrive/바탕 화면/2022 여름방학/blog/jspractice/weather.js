let request=require('request');
const { json } = require('stream/consumers');
var jsonObj;

let forecast = request('https//api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=67d571cee4ff2af49c8d2c33d063a77a', function(err, res,body){
    jsonObj = JSON.parse(body);
});

console.log(jsonObj);

