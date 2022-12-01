let app = require('express')()
let port = 3000
let pokemon = require("./models/pokemon")

app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())//!creates engine?

app.get('/', (req,res) => {
   res.send("Welcome to the Pokemon App!")
})
app.get('/pokemon', (req, res) => {
   res.render("Index")
})



app.listen(port, () => {
   console.log("listening")
})                
