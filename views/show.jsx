const React = require("react")
const myStyle = {
   color: "aquamarine",
   backgroundColor: "#151515",
}
const imageSize = {
   height: "300px",
   width: "300px",
}

class Show extends React.Component {
   render() {
      const { pokemon } = this.props
      return (
         <body style={myStyle}>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
            {<img src={pokemon.img + ".jpg"} alt="uh oh" style={imageSize} />}
            <a href={"/pokemon"}>Back?</a>
         </body>
      )
   }
}

module.exports = Show
