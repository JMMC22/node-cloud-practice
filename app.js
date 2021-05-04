const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send("Hola Mundo de Cloud | Parte 2")
})

app.listen(port, () => {
    console.log(`App listening in port : ${port}`)
})