import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {food: "potato"};
  }

  render() {
    const myProp = "This is a prop";

    return (
      <div>
        <Header />
        {this.state.food}
        <Content myProp={myProp} />
        <Footer />
      </div>
    );
  }

}
