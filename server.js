require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const methodOverride = require("method-override")

const mongoURI = process.env.MONGO_URI

const Pokemon = require("./models/Pokemon")

app.use(methodOverride("method"))
app.use(express.urlencoded({ extended: true })) //boilerplate code

app.set("view engine", "jsx") //(specifies what you are setting, the engine(jsx,ejs,pug))
app.engine("jsx", require("express-react-views").createEngine()) //only for jsx?

// setting up mongoose------------------------------------------
mongoose.set("strictQuery", true)

mongoose.connect(
   mongoURI,
   () => {
      console.log("connected to MongoDB")
   },
   (e) => console.error(e)
)

//!Index rout -- .get/.find                         /photos      -- table of contents
app.get("/pokemon", (req, res) => {
   Pokemon.find({}, (error, allPoke) => {
      res.render("Index", {
         pokemon: allPoke, //! getting all fruits from db to pass as props
      })
   })
})

//!New    -- .get                                 /photos/new      -- display HTML form for creating new
app.get("/pokemon/new", (req, res) => {
   res.render("New")
})

//!Delete -- .delete/.findByIdAndDelete            /photos/:id   -- delete specific photo
app.delete("/pokemon/:id", (req, res) => {
   Pokemon.findByIdAndDelete(req.params.id, (err, data) => {
      res.redirect("/pokemon") //redirect back to fruits index
   })
})

//!Update -- .put/.findByIdAndUpdate/.save()      /photos/:id   -- update specific photo
app.put("/pokemon/:id", (req, res) => {
   Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, poke) => {
      console.log(poke)
      res.redirect(`/pokemon/${req.params.id}`) // redirecting to the Show page
   })
})

//!Create -- .post                              /photos/        -- create new photo
app.post("/pokemon", (req, res) => {
   Pokemon.create(req.body, (error, create) => {
      res.redirect("/pokemon")
   })
})

//!Edit   -- .get/.findById             /photos/:id/edit -- return a HTML form for editing photo
app.get("/pokemon/:id/edit", (req, res) => {
   Pokemon.findById(req.params.id, (err, poke) => {
      if (!err) {
         res.render("Edit", {
            pokemon: poke, //pass in the found fruit so we can prefill the form
         })
      } else {
         res.send({ msg: err.message })
      }
   })
})

//!Show   -- .get/.findById             /photos/:id      -- display specific photo
app.get("/pokemon/:id", (req, res) => {
   Pokemon.findById(req.params.id, (err, poke) => {
      res.render("Show", {
         pokemon: poke,
      })
   })
})

app.listen(3000, () => console.log("listening"))
