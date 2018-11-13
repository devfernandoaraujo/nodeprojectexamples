//Dependences
var express = require("express");
var http = require("http");
var path = require("path");

//Instance of objects
var app = express();

app.set("appName", "hello-world");
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");



//Routes only one this time for example
app.all("*", function (req, res) {
    res.render("index",
        {
            msg: "Welcome to the Practical Node.js"
        }
    )
});

//Initializing the server
http.createServer(app).listen(app.get("port"), function () {
    console.log("Express server listening on port " + app.get("port"));
})
