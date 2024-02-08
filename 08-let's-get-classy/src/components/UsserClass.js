import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
    console.log(this.props.name + " child  constructed called");
  }

  componentDidMount() {
    console.log(this.props.name + " child Component Did Mount");
  }

  render() {
    const { count, count2 } = this.state;

    console.log(this.props.name + " child rendered");
    return (
      <div className="user-card">
        <h1>Name: {this.props.name}</h1>

        <h2>Location : {this.props.location}</h2>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          update count
        </button>
        <h3>Count2: {count2}</h3>
      </div>
    );
  }
}

export default UserClass;
