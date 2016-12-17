import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

// class Layout extends React.Component {
//   render() {
//     const name = "impetus";
//     return (
//       <div>
//         <h1>Hello World!</h1>
//         <p>My name is {name}</p>
//       </div>
//     );
//   }
// }

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
