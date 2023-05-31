require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('6474730fe8b932ab4043ec5e',{age:1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// User.findByIdAndDelete('some id').then((user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=> {
//     console.log(result)
// }).catch((e) => console.log(e))
const updateAndCount = async(id,age) => {
    const user = await User.findByIdAndUpdate(id,{age,});
    const count = await User.countDocuments({age,})
    return count
}
updateAndCount('647490ab78389dd08d99a0ee',200).then((count) => console.log(count)).catch((e) => console.log(e))