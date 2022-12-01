const React = require("react")
const myStyle = {
   color: "aquamarine",
   backgroundColor: "#151515",
}

class Index extends React.Component {
   render() {
      const { pokemon } = this.props
      return (
         <body style={myStyle}>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
            <img src={pokemon.img + ".jpg"} alt="uh oh" />
            <a href= {"/pokemon"}>Back?</a>
         </body>
      )
   }
}
module.exports = Index