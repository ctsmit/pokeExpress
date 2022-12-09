require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 3000
const db = mongoose.connection
const mongoURI = process.env.MONGO_URI

const Pokemon = require("./models/pokemon")

app.use(express.urlencoded({ extended: true })) //boilerplate code

app.set("view engine", "jsx") //(specifies what you are setting, the engine(jsx,ejs,pug))
app.engine("jsx", require("express-react-views").createEngine()) //only for jsx?

// setting up mongoose------------------------------------------
mongoose.set("strictQuery", true)

mongoose.connect(mongoURI)

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"))
db.on("open", () => console.log("mongo connected"))
db.on("close", () => console.log("mongo disconnected"))

//!Index
app.get("/pokemon", (req, res) => {
   Pokemon.find({}, (error, allPoke) => {
      res.render("Index", {
         pokemon: allPoke, //! getting all fruits from db to pass as props
      })
   })
})

//!New    -- .get /photos/new      -- display HTML form for creating new
app.get("/pokemon/new", (req, res) => {
   res.render("New")
})

//!Create -- .post /photos/        -- create new photo
app.post("/pokemon", (req, res) => {
   Pokemon.create(req.body, (error, create) => {
      res.redirect("/pokemon")
   })
})

//!Show
app.get("/pokemon/:id", (req, res) => {
   Pokemon.findById(req.params.id, (err, onePoke) => {
      res.render("show", {
         pokemon: onePoke,
      })
   })
})

app.listen(port, () => console.log("listening"))

