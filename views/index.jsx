const React = require("react")
const myStyle = {
   color: "aquamarine",
   backgroundColor: "#151115"
}

class Index extends React.Component {
   render() {
      return (
         <div style={myStyle}>
            <h1>Pokemon Index Page</h1>
         </div>
      )
   }
}
module.exports = Index
