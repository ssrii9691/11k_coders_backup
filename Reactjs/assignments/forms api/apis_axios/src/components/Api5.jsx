import React, { Component } from "react";
import axios from 'axios'

export default class Api5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coach: {
        id:"",
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

  getcoach=()=>{
    axios.get(" http://localhost:3000/coach/").then((res)=>{
        this.setState({allcoaches:res.data})
    })
  }

  changeCoach = (e) => {
    var newcoach = { ...this.state.coach };
    newcoach[e.target.name] = e.target.value;
    this.setState({ coach: newcoach });
  };

  addCoach = () => {
    axios.post("http://localhost:3000/coach/",this.state.coach).then(()=>{
        this.getcoach()
    })
    this.clearform()
  };

  clearform = () => {
    var newform = {
        id:"",
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
      axios.delete(" http://localhost:3000/coach/"+coa.id).then(()=>{
        this.getcoach()
      })
  }

  updatecoach=()=>{
   axios.put((" http://localhost:3000/coach"+this.state.coach.id),this.state.coach).then(()=>{
    this.getcoach()
   })
   this.clearform()
   this.setState({editIndex:null})
  }

  render() {
    return (
      <div>
        <div>
          <form> 
            <label htmlFor="">id:-</label>
            <input
              type="text"
              name="id"
              value={this.state.coach.id} disabled
              onChange={(e) => {
                this.changeCoach(e);
              }}
            />{" "}
            <br />
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
                <th>id</th>
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
                    <td>{coa.id}</td>
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

  async componentDidMount(){
    let sports=await axios.get(" http://localhost:3000/coach/")
    this.setState({allcoaches:sports.data})
  }
}
