const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.status(200).json({message: "Hello com uma aplicação de NodeJs"})
})

app.listen(3000)