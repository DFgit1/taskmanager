const express = require("express")
const app = express();
const config = require("./config")
const Task = require("./models/Task")
const cors = require("cors");


app.use(cors()); //this will solve the cors policy block

config.authenticate().then(function(){
    console.log("Database is connected");
})
.catch(function(err){
    console.log(err);
});

app.get("/tasks", function(req,res){
    Task.findAll().then(function(results){
        res.status(200).send(results);
    }).catch(function(err){
        res.status(500).send(err);
    });
});


app.listen(3000, function(){
    console.log("Server running on port 3000")
});

