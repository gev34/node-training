const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// const userOneId = new mongoose.Types.ObjectId()
// const userOne = {
//     _id:userOneId,
//     name:"GSJS",
//     email:"aad@email.com",
//     password:"asdsdefef2323",
// tokens:[{
//     token: jwt.sign({_id:userOneId},process.env.JWT_SECRET)
// }]
// }

// beforeEach(async() => {
//     // await User.deleteMany();
//     // await new User(userOne).save()
// })

test("Should sign up a new user", async () => {
 const response =  await request(app)
    .post("/users")
    .send({
      name: "Gev",
      email: "gevsgevsgevs@email.com",
      password: "gevsgevs",
    })
    .expect(201);
    const user = User.findById(response.body.user._id)
    expect(user).not.toBeNull()
    expect(response.body).toMatchObject({
        user:{
            name:"Gev",
            email:"gevgevgev@mail.ru"
        },
        token:user.tokens[0].token
    })
    //pti hashavorvac lini
    expect(user.password).not.toBe('gevsgevs')
});
// test('Should get profle for user',async()=> {
//     await request(app)
//         .get('/users/me')
//         .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
//         .send()
//         .expect(200)
// })
// test("Should not get profle for unauthenticated user", async () => {
//   await request(app).get("/users/me").send().expect(401);
// });
test("Should upload avatar image",async()=>{
    await request(app)
    .post('/users/me/avatar')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send()
    .attach('avatar','tests/fixtures/someimage')
    .expect(200)
    const user = await User.findById(userOneId)
    //toEqual ogtagorcum enq erb gorc unen objectneri het voronq erb gren {} === {} false kta 
    expect(user.avatar).toEqual(expect.any(Buffer))
})
