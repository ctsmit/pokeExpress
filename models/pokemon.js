const mongoose = require("mongoose")
// const Schema = mongoose.Schema //create a shorthand for the mongoose Schema constructor
// const model = mongoose.model //shorthand for model function

// create a new Schema
// This will define the shape of the documents in the collection
// https://mongoosejs.com/docs/guide.html
const pokeSchema = new mongoose.Schema({
   name: String,
   // img: String,
})

// Creating Tweet model : We need to convert our schema into a model-- will be stored in 'tweets' collection.  Mongo does this for you automatically
// Model's are fancy constructors compiled from Schema definitions
// An instance of a model is called a document.
// Models are responsible for creating and reading documents from the underlying MongoDB Database
// from here: https://mongoosejs.com/docs/models.html
module.exports = mongoose.model("Pokemons", pokeSchema)

//make this exportable to be accessed in `app.js`

