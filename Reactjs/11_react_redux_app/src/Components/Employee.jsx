import React, { Component } from "react";
import { connect } from "react-redux";
import { addemployeeaction, deleteemployeeaction } from "./Action";

class Employee extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addemployee}>addemployee </button>
        <button onClick={this.props.deleteemployee}>deleteemployee</button>

        <ul>
          {this.props.allemployee &&
            this.props.allemployee.map((emp, i) => 
              <li
                onClick={() => {
                  this.props.deleteemployee(emp);
                }}
              >
                {emp}
              </li>
            )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allemployee: state.employees,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addemployee: () => dispatch(addemployeeaction()),
    deleteemployee: (emp) => dispatch(deleteemployeeaction(emp)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Employee);
