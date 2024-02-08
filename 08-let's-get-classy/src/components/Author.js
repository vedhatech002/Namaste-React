import React from "react";

class Author extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("Author child  constructed called");
  }

  componentDidMount() {
    console.log("Author child Component Did Mount");
  }
  render() {
    console.log("Author child render");
    return <div>Author class </div>;
  }
}

export default Author;
