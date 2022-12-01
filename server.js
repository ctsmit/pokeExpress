let app = require('express')()
let port = 3000

app.get('/', (req,res) => {
   res.send("Welcome to the Pokemon App!")
})


app.listen(port, () => {
   console.log("listening")
})