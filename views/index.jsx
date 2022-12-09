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
            <h1>Pokemon Index Page</h1>
            <ul>
               {pokemon.map((mon, i) => {
                  return (
                     <li>
                        <a href={`/pokemon/${mon.id}`}>{mon.name[0].toUpperCase() + mon.name.slice(1)}</a>
                     </li>
                  )
               })}
            </ul>
            <a href="/pokemon/new">Create your own Pokemon?</a>
         </body>
      )
   }
}
module.exports = Index
