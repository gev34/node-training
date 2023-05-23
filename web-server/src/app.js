const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const geocode = require("./utils/geocode");

//define paths for Express config
// console.log(path.join(__dirname,'../public/index.html'));
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
//define handlebars engine and views location
//esi petqa hbs kardalu hamar
app.set("view engine", "hbs");
//vor karananq hbsneri folderi anuny viewic poxenq urish ban
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

//setup static directory to serve
//ete es grum enq
app.use(express.static(publicDirPath));
//Es el petq chi nuyny mtnum enq .html nerov
// app.get('',(req,res) => {
//     res.send("<h1>Weather</h1>")
// })
// app.get('/help',(req,res) => {
//     res.send({
//         "name":"Gugo",
//         "age":"4"
//     })
// })
// app.get('/about',(req,res) => {
//     res.send("About page")
// })

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    author: "Gevs",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    author: "Gevs",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    author: "Gevs",
  });
});
app.get("/help/*", (req, res) => {
  //404y file i anunna u sagh teghery tenca partadir nuyny piti lini vor karda
  res.render("404", {
    title: "404",
    author: "Gevs",
    errorMessage: "Help article not found",
  });
});
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send("Please provide an address");
  }
  geocode(req.query.address, (error, data) => {
    if (error) {
      console.log(error, "Error");
      res.send({
        error: error,
        location: req.query.address
      });
    } else {
      console.log(data.weather_descriptions, "Data");
      res.send({
        forecast: data.weather_descriptions[0],
        location: req.query.address
      });
    }
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    author: "Gevs",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
