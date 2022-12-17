import React, { Component } from "react";

export default class PersonDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: "",
      subjects: [],
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.name == "gender") {
      this.setState({ gender: e.target.value });
    } else {
      var allCheckBoxes = [...this.state.subjects];
      if (allCheckBoxes.length == 0) {
        allCheckBoxes.push(e.target.value);
      } else {
        let check = allCheckBoxes.find((cb) => cb == e.target.value);
        if (check) {
          allCheckBoxes = allCheckBoxes.filter((cb) => cb != e.target.value);
        } else {
          allCheckBoxes.push(e.target.value);
        }
      }
      this.setState({ subjects: allCheckBoxes });
    }
  };
  getValues = () => {
    console.log(this.state);
  };
  clearValues = () => {
    this.setState({
      gender: "",
      subjects: [],
    });
  };

  setValues=()=>{
    this.setState({
        gender: "Male",
      subjects: ["JS","CSS"],
    })
  }
  render() {
    return (
      <div className="container">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value={"Male"}
            onChange={(e) => {
              this.handleChange(e);
            }}
            checked={this.state.gender == "Male"}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value={"Female"}
            onChange={(e) => {
              this.handleChange(e);
            }}
            checked={this.state.gender == "Female"}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <hr />
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="HTML"
            onChange={(e) => {
              this.handleChange(e);
            }}
            checked = {this.state.subjects.indexOf("HTML") > -1}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            HTML
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="CSS"
            onChange={(e) => {
              this.handleChange(e);
            }}
            checked = {this.state.subjects.indexOf("CSS") > -1}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            CSS
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="JS"
            onChange={(e) => {
              this.handleChange(e);
            }}
            checked = {this.state.subjects.indexOf("JS") > -1}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            JS
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="ReactJS"
            onChange={(e) => {
              this.handleChange(e);
            }}
            checked = {this.state.subjects.indexOf("ReactJS") > -1}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            ReactJS
          </label>
        </div>
        <br />
        <button onClick={this.getValues} className="btn btn-primary">
          Get Values
        </button>
       
        <button onClick={this.clearValues} className="btn btn-primary">
          Clear Values
        </button>
        
        <button onClick={this.setValues} className="btn btn-primary">
          Edit Values
        </button>
      </div>
    );
  }
}