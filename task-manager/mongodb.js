//CRUD create read update delete
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
// const id = new ObjectID();
// const timeID = id.getTimestamp();
// console.log(id);
// console.log(timeID);
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

   
    //CREATE


    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Gev",
    //     age: "22",
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Gev",
    //       age: "22",
    //     },
    //     {
    //       name: "Gugo",
    //       age: "23",
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").insertMany([
    //     {
    //         desctiption:"Clean the house",
    //         completed:true
    //     },
    //     {
    //         desctiption:"Learn React",
    //         completed:true
    //     },
    //     {
    //         desctiption:"Learn Node",
    //         completed:false
    //     }
    // ],(error,result) =>{
    //     if(error){
    //         return console.log("Unable to insert documents")
    //     }
    //     console.log(result.ops)
    // })


    //READ


    // db.collection("users").findOne({_id:new ObjectID("6471fda2b2f5806a0c4b6c38")},(error,result) =>{
    //     if(error){
    //         return console.log("Unable to fetch")
    //     }
    //     console.log(result)
    // })

    // db.collection("users").findOne({name:"Gugo"} ,(error,result) =>{
    //     if(error){
    //         return console.log("Unable to fetch")
    //     }
    //     console.log(result)
    // })

    // db.collection("users").find({name:"Gev"}).toArray((error,users) => {
    //     if(error){
    //         return console.log("Unable to fetch")
    //     }
    //     console.log(users)
    // })

    // db.collection("users").find({name:"Gev"}).count((error,count) => {
    //     if(error){
    //         return console.log("Unable to fetch")
    //     }
    //     console.log(count)
    // })


    //UPDATE


    // db.collection("users").updateOne({
    //     _id:new ObjectID("6471ff44fcc4a36b34beb05f")
    // },{
    //     $set:{
    //         //set ov poxum enq stringery u tvery bayc gorcoghutyun -ov chenq karum anenq,ete uzum enq depqum $inc ov karum enq eghac tvic hanenq
    //         name:"Gevs",
    //         age:27
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("6471ff44fcc4a36b34beb05f"),
    //     },
    //     {
    //       $inc: {
    //         age: -50,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("users")
    //   .updateMany(
    //     {
    //       age: "22",
    //     },
    //     {
    //       $set: {
    //         age: "23",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });


    //DELETE


    // db.collection("users").deleteOne({
    //     age:-33
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection("users")
    //   .deleteMany({
    //     name: "Gugo",
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);
