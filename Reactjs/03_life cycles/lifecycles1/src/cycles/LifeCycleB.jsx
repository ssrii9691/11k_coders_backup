import React, { Component } from "react";

export default class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("LifeCycleB constructor Triggered");
  }

  render() {
    console.log("LifeCycleB render Triggered");

    return (
      <div>
        <h2>{this.props.msg}</h2>
      </div>
    );
  }
  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate Triggered");
    return true;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate Triggered");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount Triggerd !!")
  }
  
}