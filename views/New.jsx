const React = require("react")
const myStyle = {
   color: "aquamarine",
   backgroundColor: "#151515",
}

class New extends React.Component {
   render() {
      return (
         <body style={myStyle}>
            <h1>New Pokemon page</h1>
            <form action="/pokemon" method="POST">
               Name: <input type="text" name="name" />
               <br />
               <br />
               <input type="submit" name="" value="Create Pokemon" />
            </form>
         </body>
      )
   }
}

module.exports = New
