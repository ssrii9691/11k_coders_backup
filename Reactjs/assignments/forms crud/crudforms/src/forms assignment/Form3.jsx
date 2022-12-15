import React, { Component } from "react";

export default class Form3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coach: {
        username: "",
        password: "",
        emailaddress: "",
        dateOfbirth: "",
        height: "",
        weight: "",
      },
      allcoaches: [],
      editIndex: null,
    };
  }

  changeCoach = (e) => {
    var newcoach = { ...this.state.coach };
    newcoach[e.target.name] = e.target.value;
    this.setState({ coach: newcoach });
  };

  addCoach = () => {
    var newallcoaches = [...this.state.allcoaches];
    newallcoaches.push(this.state.coach);
    this.setState({ allcoaches: newallcoaches });
    this.clearform();
  };

  clearform = () => {
    var newform = {
      username: "",
      password: "",
      emailaddress: "",
      dateOfbirth: "",
      height: "",
      weight: "",
    };
    this.setState({ coach: newform });
  };
  editcoach = (coa, i) => {
    this.setState({ coach: coa, editIndex: i });
  };

  deleteCoach=(coa)=>{
   var latestcoach=this.state.allcoaches.filter((mycoach)=>
   mycoach.password!==coa.password)
   this.setState({allcoaches:latestcoach})
  }

  updatecoach=()=>{
    var latestnewcoach=[...this.state.allcoaches]
    latestnewcoach[this.state.editIndex]=this.state.coach
    this.setState({allcoaches:latestnewcoach,editIndex:null})
    this.clearform()
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <label htmlFor="">username:-</label>
            <input
              type="text"
              name="username"
              value={this.state.coach.username}
              onChange={(e) => {
                this.changeCoach(e);
              }}
            />{" "}
            <br />
            <label htmlFor="">password:-</label>
            <input
              type="password"
              name="password"
              value={this.state.coach.password}
              onChange={(e) => {
                this.changeCoach(e);
              }}
            />{" "}
            <br />
            <label htmlFor="">emailaddress:-</label>
            <input
              type="text"
              name="emailaddress"
              value={this.state.coach.emailaddress}
              onChange={(e) => {
                this.changeCoach(e);
              }}
            />{" "}
            <br />
            <label htmlFor="">dateOfbirth:-</label>
            <input
              type="date"
              name="dateofbirth"
              value={this.state.coach.dateOfbirth}
              onChange={(e) => {
                this.changeCoach(e);
              }}
            />{" "}
            <br />
            <label htmlFor="">height:-</label>
            <input
              type="number"
              name="height"
              value={this.state.coach.height}
              onChange={(e) => {
                this.changeCoach(e);
              }}
            />
            <label htmlFor="">weight:-</label>
            <input
              type="number"
              name="weight"
              value={this.state.coach.weight}
              onChange={(e) => {
                this.changeCoach(e);
              }}
            />{" "}
            <br />
            {this.state.editIndex !== null ? (
              <button type="button" onClick={this.updatecoach}>
                updatecoach
              </button>
            ) : (
              <button onClick={this.addCoach} type="button">
                addcoach
              </button>
            )}
          </form>
        </div>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th>username</th>
                <th>password</th>
                <th>emailaddress</th>
                <th>dateofbirth</th>
                <th>height</th>
                <th>weight</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.allcoaches.map((coa, i) => (
                <tr key={i}>
                  <td>{coa.username}</td>
                  <td>{coa.password}</td>
                  <td>{coa.emailaddress}</td>
                  <td>{coa.dateofbirth}</td>
                  <td>{coa.height}</td>
                  <td>{coa.weight}</td>

                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={()=>{this.editcoach(coa, i)}}
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={()=>{this.deleteCoach(coa)}}
                      type="button"
                    >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
