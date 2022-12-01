let app = require('express')()
let port = 3000
let pokemon = require("./models/pokemon")

app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())//!creates engine?

//!Index
app.get('/', (req,res) => {
   res.send("Welcome to the Pokemon App!")
})
app.get('/pokemon', (req, res) => {
   res.render("Index", {pokemon: pokemon})
})

//!SHow
app.get('/pokemon/:id', (req, res) => {
   res.render("Show", { pokemon: pokemon[req.params.id] })
})







app.listen(port, () => {
   console.log("listening")
})                
