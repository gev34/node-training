const geocode = require('./utils/geocode')
// const url =
//   "http://api.weatherstack.com/current?access_key=e7b30c0e43aefcf6610e9402e5260c27&query=Armenia";
// request({ url, json: true }, (error, response) => {
//     if(error){
//         //Slow Internet
//         console.log("Krkin Pordzir")
//     } else if(response.body.error){
//         console.log("Aveli shat pordzir")
//     }else{
//         console.log(response.body.current);
//     }
// });
geocode("Armenia",(error,data) => {
    console.log("Error",error)
    console.log("Data",data)

})
