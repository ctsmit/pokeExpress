let app = require('express')()
let port = 3000
let pokemon = require("./models/pokemon")

app.get('/', (req,res) => {
   res.send("Welcome to the Pokemon App!")
})
app.get('/pokemon', (req, res) => {
   res.send(pokemon)
})
app.listen(port, () => {
   console.log("listening")
})