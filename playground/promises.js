// const func = (callback) => {
//     setTimeout(()=>{
//         //2nel anuma
//         callback(undefined,[1])
//         callback("Error",undefined)
//     },1000)
// }

// func((error,result) =>{
//     if(error){
//         return console.log(error)
//     }
//     console.log(result)
// })
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
const func = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(a+b)
        },2000)
    })
}

func(1,2).then((sum) => {
    console.log(sum)
    return func(2,3)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => console.log(e))