/**
 *<div id=>
 *   <div id="child">
 *    <h1></h1>
 *   <h2></h2>
 *  </div>
 * <div id="child">
 *    <h1></h1>
 *   <h2></h2>
 *  </div>
 *</div>
 *
 * ReactElement(object) =>HTML(Browser understand)
 */

//single element
const heading = React.createElement(
  "h1",
  { id: "heading", className: "heading" },
  "Hello world from React!"
); //create a element

//nested element
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    // craete sibling tag => wrap the third argument into array and give multiple children
    [
      React.createElement("h1", {}, "i'm a nested h1"),
      React.createElement("h2", {}, "i'm a sibling h2"),
    ]
  ),
  React.createElement(
    "div",
    { id: "child2" },

    [
      React.createElement("h1", {}, "i'm a child2 nested h1"),
      React.createElement("h2", {}, "i'm a child2 sibling h2"),
    ]
  ),
]);

//👆ugly structure JSX comes to soleve this issue

console.log(parent);
console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root")); // create root for render

root.render(parent); //render => takes the object to a h1 tag and puttin to dom
