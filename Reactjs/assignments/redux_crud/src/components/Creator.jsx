import React, { Component } from "react";
import { connect } from "react-redux";
import { addCreatorAction } from "../stores/Action";
import CreatorTable from "./CreatorTable";

class Creator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      email: "",
    };
  }
  creatorChange = (e) => {
    var newcreator = { ...this.state };
    newcreator[e.target.name] = e.target.value;
    this.setState(newcreator);
  };

  addCreator = () => {
    this.props.addCreator(this.state);
    this.clearcreator();
  };
  clearcreator = () => {
    this.setState({
      fname: "",
      lname: "",
      email: "",
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <form action="">
              <label htmlFor="">firstName:</label>
              <input
                type="text"
                name="fname"
                value={this.state.fname}
                onChange={(e) => {
                  this.creatorChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">Lastname:</label>
              <input
                type="text"
                name="lname"
                value={this.state.lname}
                onChange={(e) => {
                  this.creatorChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">email:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={(e) => {
                  this.creatorChange(e);
                }}
              />{" "}
              <br />
              <button
                type="button"
                onClick={() => {
                  this.addCreator();
                }}
                className={"btn btn-primary"}
              >
                addCreator
              </button>
            </form>
            <div className="col-8">
              <CreatorTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapstateToProps(state) {
  console.log(state);
  return {
    allcreators: state.creators,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addCreator: (creator) => dispatch(addCreatorAction(creator)),
  };
}
export default connect(mapstateToProps, mapDispatchToProps)(Creator);
