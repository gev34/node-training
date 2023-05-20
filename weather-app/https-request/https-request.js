    const http = require("http");
    const url =
    "http://api.weatherstack.com/current?access_key=e7b30c0e43aefcf6610e9402e5260c27&query=Armenia";

    const request = http.request(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
        data = data + chunk.toString();
    });
    response.on("end", () => {
        const body = JSON.parse(data);
        console.log(body);
    });
    });

    // request.on("error", (error) => {
    // console.log("An error", error);
    // });
    request.end();
