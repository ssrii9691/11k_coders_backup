import React, { Component } from "react";

export default class UniversityDetails extends Component {
  constructor() {
    super();
    this.state = {
      RegistrationDetails: {
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        avgCPI: "",
        thSemester: "",
        experience: "",
        webSite_Blog: "",
      },
      allusers: [
        {
          university: "Vignan University",
          institute: "main campus",
          branch: "MECH",
          degree: "B.Tech",
          status: "Pursuing",
          avgCPI: "98",
          thSemester: "8",
          experience: "0",
          webSite_Blog: "https://www.google.co.in/",
        },
      ],
      editIndex: null,
    };
  }

  changeHandle = (e) => {
    console.log(e.target.value);
    var newUsers = { ...this.state.RegistrationDetails };
    if (e.target.name === "branch") {
      // console.log(e.target.childNodes)
      // console.log(e.target.childNodes.length);
      e.target.childNodes.forEach((element, i) => {
        if (e.target.childNodes[i].selected) {
          // console.log(e.target.childNodes[i].text);
          newUsers[e.target.name] = e.target.childNodes[i].text;
        }
      });
    } else if (e.target.name === "degree") {
      e.target.childNodes.forEach((element, i) => {
        if (e.target.childNodes[i].selected) {
          newUsers[e.target.name] = e.target.childNodes[i].text;
        }
      });
    } else {
      newUsers[e.target.name] = e.target.value;
    }
    this.setState({ RegistrationDetails: newUsers });
  };
  addUser = () => {
    // console.log(this.state.RegistrationDetails);
    var newAllUsers = [...this.state.allusers];
    newAllUsers.push(this.state.RegistrationDetails);
    this.setState({ allusers: newAllUsers });
    this.clearForm();
  };
  clearForm() {
    // console.log("Clear form action triggered...!");
    // var newUserClear = this.state.allusers.map((element,i)=>{
    //     if(i==0){
    //         for(let a in element){
    //             if(a === "branch"){
    //                 element[a]="--select one branch--"
    //             }
    //             else{
    //                 element[a] = ""
    //             }
    //             return element;
    //         }
    //     }
    // })
    var newUserClear = {
      university: "",
      institute: "",
      branch: "",
      degree: "",
      status: "",
      avgCPI: "",
      thSemester: "",
      experience: "",
      webSite_Blog: "",
    };
    this.setState({ RegistrationDetails: newUserClear });
  }
  deleteUser = (usr) => {
    var latestUsers = this.state.allusers.filter(
      (myUser, i) => myUser.university != usr.university
    );
    this.setState({ allusers: latestUsers });
  };
  editUser = (usr, i) => {
    this.setState({ RegistrationDetails: usr, editIndex: i });
  };
  updateUser = () => {
    var newLatestUser = [...this.state.allusers];
    newLatestUser[this.state.editIndex] = this.state.RegistrationDetails;
    this.setState({ allusers: newLatestUser, editIndex: null });
    this.clearForm();
  };
  render() {
    return (
      <div>
        <h1>
          <u>Univeristy Registration Details</u>
        </h1>{" "}
        <br />
        <form action="">
          <label htmlFor="">University</label>
          <input
            type="text"
            name="university"
            value={this.state.RegistrationDetails.university}
            onChange={(e) => {
              this.changeHandle(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Insitute</label>
          <input
            type="text"
            name="institute"
            value={this.state.RegistrationDetails.institute}
            onChange={(e) => {
              this.changeHandle(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Branch</label>
          <select
            name="branch"
            value={this.state.RegistrationDetails.branch}
            onChange={(e) => {
              this.changeHandle(e);
            }}
          >
            <option value={""}>--select one branch--</option>
            <option value={"ECE"}>ECE</option>
            <option value={"CSE"}>CSE</option>
            <option value={"EEE"}>EEE</option>
            <option value={"CIVIL"}>CIVIL</option>
            <option value={"MECH"}>MECH</option>
          </select>{" "}
          <br />
          <label htmlFor="">Degree</label>
          <select
            name="degree"
            value={this.state.RegistrationDetails.degree}
            onChange={(e) => {
              this.changeHandle(e);
            }}
          >
            <option value={""}>--select one Degree--</option>
            <option value={"B.Tech"}>B.Tech</option>
            <option value={"M.Tech"}>M.Tech</option>
          </select>{" "}
          <br />
          <input
            type="radio"
            name="status"
            checked={this.state.RegistrationDetails.status == "Pursuing"}
            value={"Pursuing"}
            onChange={(e) => {
              this.changeHandle(e);
            }}
          />
          <label htmlFor="">Pursuing</label> <br />
          <input
            type="radio"
            name="status"
            checked={this.state.RegistrationDetails.status == "Completed"}
            value={"Completed"}
            onChange={(e) => {
              this.changeHandle(e);
            }}
          />
          <label htmlFor="">Completed</label> <br />
          <label htmlFor="">Average CPI</label>
          <input
            type="number"
            name="avgCPI"
            id=""
            value={this.state.RegistrationDetails.avgCPI}
            onChange={(e) => {
              this.changeHandle(e);
            }}
          />
          <br />
          <label htmlFor="">th Semester</label>
          <input
            type="number"
            name="thSemester"
            id=""
            value={this.state.RegistrationDetails.thSemester}
            onChange={(e) => {
              this.changeHandle(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Experience</label>
          <input
            type="number"
            name="experience"
            id=""
            value={this.state.RegistrationDetails.experience}
            onChange={(e) => {
              this.changeHandle(e);
            }}
          />
          <br />
          <label htmlFor="">Your Website or blog</label>
          <input
            type="text"
            name="webSite_Blog"
            id=""
            value={this.state.RegistrationDetails.webSite_Blog}
            onChange={(e) => {
              this.changeHandle(e);
            }}
          />{" "}
          <br /> <br />
          {this.state.editIndex != null ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.updateUser}
            >
              Update Details
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addUser}
            >
              Add Details
            </button>
          )}
          {/* <button type='button' className='btn btn-primary' onClick={this.addUser}>Add Details</button> */}
        </form>{" "}
        <br />
        <hr />
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>University</th>
              <th>Institute</th>
              <th>Branch</th>
              <th>Degree</th>
              <th>Status</th>
              <th>Average CPI</th>
              <th>th Semester</th>
              <th>Experience</th>
              <th> Your Website or Blogs</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allusers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.university}</td>
                <td>{usr.institute}</td>
                <td>{usr.branch}</td>
                <td>{usr.degree}</td>
                <td>{usr.status}</td>
                <td>{usr.avgCPI}</td>
                <td>{usr.thSemester}</td>
                <td>{usr.experience}</td>
                <td>{usr.webSite_Blog}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      this.editUser(usr, i);
                    }}
                  >
                    EDIT
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      this.deleteUser(usr);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}