import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
      // count: 0,
      // count2: 1,
    };
    // console.log(this.props.name + " child  constructed called");
  }

  async componentDidMount() {
    console.log(this.props.name + " child Component Did Mount");
    const data = await fetch(" https://api.github.com/users/vedhatech002");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  // called after component updated

  componentDidUpdate(prevprops, prevState) {
    console.log("componentDid update");
    // used to update or callcomponent did mount based on conditions
    if (this.state.count !== prevState) {
      //some logics
    }
    // it will expand based on condition
  }

  componentWillUnmount() {
    console.log("component un mount");
  }
  render() {
    // const { count, count2 } = this.state;

    console.log(this.props.name + " child rendered");
    return (
      <div className="user-card">
        <img src={this.state?.userInfo?.avatar_url} />
        {/* <h1>Name: {this.props.name}</h1> */}
        <h1>Name : {this.state.userInfo?.name}</h1>
        {/* <h2>Location : {this.props.location}</h2> */}
        <h2>Role : {this.state.userInfo.bio}</h2>
        {/* <h3>Count: {count}</h3> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          update count
        </button> */}
        {/* <h3>Count2: {count2}</h3> */}
      </div>
    );
  }
}

export default UserClass;

/**
 * ---MOUNTING CYCLE---
 *
 *  Constructor called
 *  Render(dummy data)
 *   <HTML DUMMY loaded>
 * ComponentDidMount Called
 *  <API CaLL>
 * <this.setState>
 *
 * ---UPDATE CYCLE---
 *   render(API)
 *   <HTML with API Data>
 *  ComponentDid Update called
 */
