import React, { Component } from "react";
import { addcreatorAction } from "../store/actions/creatorsAction";
import { connect } from "react-redux";

class CreatorsComp extends Component {
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

  changeCreator=(e)=>{
    let newCreator={...this.state.creator}
    newCreator[e.target.name]=e.target.value;
    this.setState({creator:newCreator})
  }

  addCreator=()=>{
    this.props.addcreator(this.state.creator)
    this.clearform()
  }
  clearform=()=>{
    this.setState({
        creator: {
            id: "",
            fname: "",
            lname: "",
            email: "",
          },
    })
  }
  render() {
    const {id,fname,lname,email}=this.state.creator;
    const {creators}=this.state.allcreators
    return <div>
        <form >
            <label htmlFor="">id:</label>
            <input type="text" name="id" value={id} onChange={(e)=>{this.changeCreator(e)}} /> <br />
            <label htmlFor="">FirstName:</label>
            <input type="text" name="fname" value={fname} onChange={(e)=>{this.changeCreator(e)}} /> <br />
            <label htmlFor="">lastName:</label>
            <input type="text" name="lname" value={lname} onChange={(e)=>{this.changeCreator(e)}} /> <br />
            <label htmlFor="">email:</label>
            <input type="text" name="email" value={email} onChange={(e)=>{this.changeCreator(e)}} /> <br />

            <button type="button" onClick={this.addCreator}>addCreator</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>FirstName</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>ediy</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {creators.map((cre,i)=>(
                    <tr>
                        <td>{cre.id}</td>
                        <td>{cre.fname}</td>
                        <td>{cre.lname}</td>
                        <td>{cre.email}</td>
                        <td>
                            <button>edit</button>
                        </td>
                        <td>
                            <button type="button" onClick={()=>{this.DeleteCreator(cre)}}>delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>;
  }
}

function mapStateToProps(state) {
  return {
    allcreators: state.creators,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addcreator: (creator) => dispatch(addcreatorAction(creator)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatorsComp);
