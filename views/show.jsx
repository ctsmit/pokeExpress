const React = require("react")
const myStyle = {
   color: "aquamarine",
   backgroundColor: "#151515",
}

class Show extends React.Component {
   render() {
      const { pokemon } = this.props
      return (
         <body style={myStyle}>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
            {<img src={"https://img.pokemondb.net/artwork/" + pokemon.name.toLowerCase() + ".jpg"} alt="uh oh" />}
            <br />
            <a style={{ textDecoration: "none" }} href={`/pokemon/${pokemon.id}/edit`}> Change Pokemon?</a>
            <form action={`/pokemon/${pokemon.id}?method=DELETE`} method="POST">
                  <input type="submit" value="DELETE"/>
             </form>
            <a style={{ textDecoration: "none" }} href={"/pokemon"}>
               Back?
            </a>
         </body>
      )
   }
}

module.exports = Show
