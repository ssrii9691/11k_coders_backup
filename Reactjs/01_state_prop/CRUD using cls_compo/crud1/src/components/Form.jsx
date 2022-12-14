import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      creator: {
        fname: "",
        lname: "",
        email: "",
        phone: "",
      },
      allcreators: [
        {
          fname: "sai",
          lname: "kumar",
          email: "kumar@gamil.com",
          phone: "818299299",
        },
      ],
      editIndex: null,
    };
  }

  makechange = (e) => {
    var newCreator = { ...this.state.creator };
    newCreator[e.target.name] = e.target.value;
    this.setState({ creator: newCreator });
  };
  addcreator = () => {
    var newallcreators = [...this.state.allcreators];
    newallcreators.push(this.state.creator);
    this.setState({ allcreators: newallcreators });
    // console.log(newallcreators)
    this.clearform();
  };
  clearform = () => {
    var newform = {
      fname: "",
      lname: "",
      email: "",
      phone: "",
    };
    this.setState({ creator: newform });
  };

  editmaker = (cre, i) => {
    this.setState({ creator: cre, editIndex: i });
  };

  deletemaker = (cre) => {
    var latestCreator = this.state.allcreators.filter(
      (mycreator) => mycreator.email !== cre.email
    );
    this.setState({ allcreators: latestCreator });
  };

  updateCreator = () => {
    var latestCreator = [...this.state.allcreators];
    latestCreator[this.state.editIndex] = this.state.creator;
    this.setState({ allcreators: latestCreator, editIndex: null });
    this.clearform();
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="">First Name:-</label>
          <input
            type="text"
            name="fname"
            value={this.state.creator.fname}
            onChange={(e) => {
              this.makechange(e);
            }}
          />
          <br />
          <label htmlFor="">Last Name:-</label>
          <input
            type="text"
            name="lname"
            value={this.state.creator.lname}
            onChange={(e) => {
              this.makechange(e);
            }}
          />
          <br />
          <label htmlFor="">Email:-</label>
          <input
            type="text"
            name="email"
            value={this.state.creator.email}
            onChange={(e) => {
              this.makechange(e);
            }}
          />
          <br />
          <label htmlFor="">Phone:-</label>
          <input
            type="text"
            name="phone"
            value={this.state.creator.phone}
            onChange={(e) => {
              this.makechange(e);
            }}
          />
          <br />
          {this.state.editIndex !== null ? (
            <button type="button" onClick={this.updateCreator}>
              updateCreator
            </button>
          ) : (
            <button type="button" onClick={this.addcreator}>
            
              add creator
            </button>
          )}
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
              <th>phone</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allcreators.map((cre, i) => (
              <tr key={i}>
                <td>{cre.fname}</td>
                <td>{cre.lname}</td>
                <td>{cre.email}</td>
                <td>{cre.phone}</td>
                <td>
                  <button className="btn btn-danger"
                    onClick={() => {
                      this.editmaker(cre, i);
                    }}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-warning"
                    onClick={() => {
                      this.deletemaker(cre);
                    }}
                  >
                    delete
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

export default Form;
