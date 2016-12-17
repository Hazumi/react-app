import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(<h1>Hello. My name is iMpetus.</h1>, document.getElementById(app));

class Layout extends React.Component {
  render() {
    return (
      <h1>It works!</h1>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
