const func = (callback) => {
    setTimeout(()=>{
        //2nel anuma
        callback(undefined,[1])
        callback("Error",undefined)
    },1000)
}

func((error,result) =>{
    if(error){
        return console.log(error)
    }
    console.log(result)
})
// const func = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         //srancic mekna anelu
//         // resolve([1])
//         reject("You got error")
//     },1000)
// })

// func.then((result)=>{
//     console.log("Success",result)
// }).catch((error)=>{
//     console.log('Error',error)
// })