import React, { Component } from "react";
import {
  AddcreatorAction,
  addcreatorasyncaction,
  deleteCreatorAction,
  deletecreatorasyncaction,
  getcreatorAsyncAction,
  updateCreatorAction,
  updatecreatorasyncaction,
} from "../store/actions/CreatorActions";
import { connect } from "react-redux";

class CreatorClsComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      creator: {
        id: "",
        fname: "",
        lname: "",
        email: "",
      },
    };
  }
  creatorChange = (e) => {
    let newcreator = { ...this.state.creator };
    newcreator[e.target.name] = e.target.value;
    this.setState({ creator: newcreator });
  };
  clearform = () => {
    this.setState({
      creator: {
        id: "",
        fname: "",
        lname: "",
        email: "",
      },
      isEdit: false,
    });
  };
  creatoradd = () => {
    // this.props.addcreator(this.state.creator);
    this.props.addasynccreator(this.state.creator)
    this.clearform();
  };
  CreatorDelete = (cre) => {
    // this.props.deleteCreator(cre);
    this.props.deleteasynccreator(cre)
  };
  CreateEdit = (creator) => {
    this.setState({ creator ,isEdit:true});
  };
  CreatorUpdate=()=>{
    // this.props.updateCreator(this.state.creator)
    this.props.updateasyncreator(this.state.creator)
    this.setState({isEdit:false})
    this.clearform()
  }
   componentDidMount(){
    this.props.getcreator()
   }

  render() {
    const { id, fname, lname, email } = this.state.creator;
    const { creators } = this.props.allcreators;

    return (
      <div>
        <form>
          <label htmlFor="">id:</label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={(e) => {
              this.creatorChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">firstName:</label>
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={(e) => {
              this.creatorChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">lastName:</label>
          <input
            type="text"
            name="lname"
            value={lname}
            onChange={(e) => {
              this.creatorChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              this.creatorChange(e);
            }}
            disabled={this.state.isEdit}
          />{" "}
          <br />
          {this.state.isEdit ? (
            <button className="btn btn-warning" type="button" onClick={this.CreatorUpdate}>
              Updatecreator
            </button>
          ) : (
            <button className="btn btn-primary" type="button" onClick={this.creatoradd}>
              addCreator
            </button>
          )}
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>firstname</th>
              <th>lastname</th>
              <th>email</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {creators.map((cre, i) => (
              <tr key={i}>
                <td>{cre.id}</td>
                <td>{cre.fname}</td>
                <td>{cre.lname}</td>
                <td>{cre.email}</td>
                <td>
                  <button className="btn btn-info"
                    onClick={() => {
                      this.CreateEdit(cre);
                    }}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger"
                    onClick={() => {
                      this.CreatorDelete(cre);
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

function mapStateToProps(state) {
  return {
    allcreators: state.creators,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addcreator: (creator) => dispatch(AddcreatorAction(creator)),
    deleteCreator: (creator) => dispatch(deleteCreatorAction(creator)),
    updateCreator:(creator)=>dispatch(updateCreatorAction(creator)),
    getcreator:()=>dispatch(getcreatorAsyncAction()),
    addasynccreator:(creator)=>dispatch(addcreatorasyncaction(creator)),
    deleteasynccreator:(creator)=>dispatch(deletecreatorasyncaction(creator)),
    updateasyncreator:(creator)=>dispatch(updatecreatorasyncaction(creator))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatorClsComp);
