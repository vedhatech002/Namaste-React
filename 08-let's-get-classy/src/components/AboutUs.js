import Author from "./AUTHOR.JS";
import User from "./User";
import UserClass from "./UsserClass";
import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("parent Component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <>
        <h1>About Class Component Us</h1>
        <UserClass name={"first "} location={"vedaranyam"} />
        <UserClass name={"second"} location={"vedaranyam"} />
        <Author />
      </>
    );
  }
}
/**
 * -Parent Constructor
 * -Parent render
 *   - first child Constructor
 *   - first child  render
 *
 *   - second child Constructor
 *   - second child render
 *
 *  <DOM UPDATED - IN SINGLE BATCH>
 *
 *   - first ComponentDidMount
 *   - second child ComponentDidMount
 *
 * -Parent ComponentDidMount
 *
 */
export default AboutUs;
