import React, { Component } from "react";
import axios from 'axios'

export default class Api1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      founder: {
        id: "",
        email: "",
        username: "",
        country: "",
        phone: "",
        password: "",
      },
      allfounders: [],
      editIndex: null,
    };
  }

  founderchange=(e)=>{
      var newfounder={...this.state.founder}
      newfounder[e.target.name]=e.target.value
      this.setState({founder:newfounder})
  }

  addFounder=()=>{
    axios({
      method:'POST',
      url:'http://localhost:3000/founder/',
      data:this.state.founder,
      headers:{
        'Content-Type': 'application/json'
      }
      
    }).then(()=>{
      this.getfounder()
      // var newlatest=[...this.state.allfounders];
      // newlatest.push(this.state.founder);
      // this.setState({allfounders:newlatest});
    })

   
    this.clearform();
  }
  clearform=()=>{
    var newform={
      id: "",
      email: "",
      username: "",
      country: "",
      phone: "",
      password: "",
    }
    this.setState({founder:newform})
  }

  deleteFounder=(fou)=>{
      // let number=i+1;
     
      axios.delete("http://localhost:3000/founder/"+fou.id).then((res)=>{
        // this.componentDidMount();
        this.getfounder();
      }
      
      )
    
  }

  editFounder = (fou,i) => {
    
    this.setState({ founder:fou,editIndex : i })
}
updateFounder=()=>{
  // var number= this.state.editIndex+1;
  axios({
    method:'PUT',
    url:'http://localhost:3000/founder/'+this.state.founder.id,
    data:this.state.founder,
    headers: {
      "content-Type": "application/json",}
  }).then(()=>{
    this.getfounder();
  })

  // var newlatestFounder=[...this.state.allfounders]
  // newlatestFounder[this.state.editIndex]=this.state.founder;
  this.setState({editIndex:null})
  this.clearform()
};

getfounder=()=>{
  axios.get("http://localhost:3000/founder/").then((res)=>{
    this.setState({allfounders:res.data});
  });
}





  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="">Id:</label>
          <input
            type="text"
            name="id"
            disabled
            value={this.state.founder.id}
            onChange={(e) => {
              this.founderchange(e);
            }}
          />{" "}
          <br /> <br />
          <label htmlFor="">email:</label>
          <input
            type="email"
            name="email"
            value={this.state.founder.email}
            onChange={(e) => {
              this.founderchange(e);
            }}
          />{" "}
          <br /> <br />
          <label htmlFor="">username:</label>
          <input
            type="text"
            name="username"
            value={this.state.founder.username}
            onChange={(e) => {
              this.founderchange(e);
            }}
          />{" "}
          <br /> <br />
          <label htmlFor="">country:</label>
          <input
            type="text"
            name="country"
            value={this.state.founder.country}
            onChange={(e) => {
              this.founderchange(e);
            }}
          />{" "}
          <br /> <br />
          <label htmlFor="">phone:</label>
          <input
            type="text"
            name="phone"
            value={this.state.founder.phone}
            onChange={(e) => {
              this.founderchange(e);
            }}
          />{" "}
          <br /> <br />
          <label htmlFor="">password:</label>
          <input
            type="password"
            name="password"
            value={this.state.founder.password}
            onChange={(e) => {
              this.founderchange(e);
            }}
          />{" "}
          <br /> <br />
          {this.state.editIndex != null ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.updateFounder}
            >
              Update Founder
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addFounder}
            >
              Add Founder
            </button>
          )}
        </form>{" "}
        <br /> <hr />
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>email</th>
              <th>username</th>
              <th>country</th>
              <th>phone</th>
              <th>password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allfounders.map((fou, i) => (
              <tr key={i}>
                <td>{fou.id}</td>
                <td>{fou.email}</td>
                <td>{fou.username}</td>
                <td>{fou.country}</td>
                <td>{fou.phone}</td>
                <td>{fou.password}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      this.editFounder(fou, i);
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
                      this.deleteFounder(fou);
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

  async componentDidMount() {
    let response = await axios.get("http://localhost:3000/founder");
    this.setState({ allfounders: response.data });
  }
}
