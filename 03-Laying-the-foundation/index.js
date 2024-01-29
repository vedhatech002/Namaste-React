import React from "react";
import ReactDOM from "react-dom/client";

//React Element
//React.CreateElement => Js Object => HtmlELement(render)
const heading = React.createElement("h1", {}, "Laying Foundation");
console.log(heading);

//JSX  - HTML-like or XML-like syntax

//Jsx (transpiled before it reaches the JS Engine) - PARCEL - Babel

//JSX => Babel transplites it to React.createEement => ReactElement-JS Obje4ct=> HTMLElement(render)
const jsxHeading = (
  <h1 id="heading " className="heading">
    {<span>React </span>}
    Namste React using JSX 🚀
  </h1>
);

// console.log(jsxHeading);

// React Component
// Class Based Component -OLD
// Functional Component -NEW

//functional component => function returns some JSX code. or function returns a react element
const HeadingComponent = () => {
  return <h1>Component from functional component</h1>;
};

const number = 10000;
const Container = () => (
  <section id="container">
    {jsxHeading}
    {30 + 20}
    <HeadingComponent />
    {HeadingComponent()}
    <p> {number} Component Composition</p>
  </section>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Container />);
