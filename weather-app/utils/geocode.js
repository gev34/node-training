const request = require("request");

const geocode = (address,callback) => {
    const url =
    `http://api.weatherstack.com/current?access_key=e7b30c0e43aefcf6610e9402e5260c27&query=${address}`;
  request({ url, json: true }, (error, response) => {
      if(error){
          //Slow Internet
          callback("Krkin Pordzir",undefined)
      } else if(response.body.error){
          callback("Aveli shat pordzir",undefined)
      }else{
          callback(undefined,response.body.current);
      }
  });
  
}

module.exports = geocode