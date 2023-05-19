const geocode = (address,callback) => {
    setTimeout(() => {
        callback(address)
    },2000)
}
const data = geocode("Yerevan",(data) => console.log(data))
