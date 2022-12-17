import React, { Component } from "react";

export default class Valid extends Component {
  constructor() {
    super();

    this.state = {
      fname: "",
      lname: "",
      email: "",
      phone: "",
    };
  }
  makechange = (e) => {
    var newmake = { ...this.state };
    newmake[e.target.name] = e.target.value;
    this.setState(newmake);
  };
  adduser = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="">First Name:-</label>
          <input
            type="text"
            name="fname"
            value={this.state.fname}
            onChange={(e) => {
              this.makechange(e);
            }}
          />
          <br />
          <label htmlFor="">Last Name:-</label>
          <input
            type="text"
            name="lname"
            value={this.state.lname}
            onChange={(e) => {
              this.makechange(e);
            }}
          />
          <br />
          <label htmlFor="">Email:-</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={(e) => {
              this.makechange(e);
            }}
          />
          <br />
          <label htmlFor="">Phone:-</label>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={(e) => {
              this.makechange(e);
            }}
          />
          <br />
          <button type="button" onClick={this.adduser}>
            goDown
          </button>
        </form>
      </div>
    );
  }
}
