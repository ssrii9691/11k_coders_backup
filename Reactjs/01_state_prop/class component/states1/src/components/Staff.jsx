import { Component } from "react";

export default class Staff extends Component {
  constructor() {
    super();
    this.state = {
      personal: {
        phnNo: "828288288",
        email: "kohli@india.com",
        zip: "501111",
        state: "telangana",
      },
      showPersonals: false,
    };
  }

  showPersonals = () => {
    console.log("your seeing my personal details..!!!!");
    let newStaff = { ...this.state.personal, zip: "ap" };
    this.setState({ showPersonals: true, personal: newStaff });
  };
  render() {
    return (
      <div>
        <h2>welcome to personal details</h2>
        <button onClick={this.showPersonals}>show personal details</button>

        {/* {this.state.showPersonals && <p>{this.state.showPersonals.state}</p>} */}

        {this.state.showPersonals ? (
          <div>
            <p>{this.state.personal.phnNo}</p>
            <p>{this.state.personal.state}</p>
            <p>{this.state.personal.zip}</p>
            <p>{this.state.personal.email}</p>
          </div>
        ) : (
          <p>Empployee Details Not Availble ....</p>
        )}
      </div>
    );
  }
}
