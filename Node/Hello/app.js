const express = require('express')
const app = express()

app.get("/hello", function(req, res){
    res.status(200).json({ message: "Hello com uma aplicação de NodeJs" })
})

app.listen(3000)

//Permite que o arquivo do projeto seja exportado e consumido pelo arquivo do mocha com o chaihttp
module.exports = app;