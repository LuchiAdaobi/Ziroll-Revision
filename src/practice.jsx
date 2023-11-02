import React from "react";
import { ReactDOM } from "react";

function Header() {
  return (
    <>
      <header>
        <nav>
          <img src="./assets/react.svg" alt="react logo" />
        </nav>
      </header>
    </>
  );
}

function MainComponent() {
  return (
    <>
      <h1>Why React is so exciting!</h1>
      <ul>
        <li>Money, fulfillment, joy, global impact, Money</li>
        <li>Money, fulfillment, joy, global impact, Money</li>
        <li>Money, fulfillment, joy, global impact, Money</li>
        <li>Money, fulfillment, joy, global impact, Money</li>s
        <li>Money, fulfillment, joy, global impact, Money</li>
      </ul>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer>
        <small> Luchi dev. All rights reserved.</small>
      </footer>
    </>
  );
}

function Page() {
  return (
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
