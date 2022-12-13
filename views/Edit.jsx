const React = require("react")
const myStyle = {
   color: "aquamarine",
   backgroundColor: "#151515",
}

class Edit extends React.Component {
   render() {
      const { pokemon } = this.props
      return (
         <body style={myStyle}>
            <h1>Edit Pokemon page</h1>
            <form action={`/pokemon/${pokemon.id}?method=PUT`} method="POST">
               Name: <input type="text" name="name" defaultValue={pokemon.name}/>
               <br />
               <br />
               <input type="submit" name="" value="Update Pokemon" />
            </form>
         </body>
      )
   }
}

module.exports = Edit