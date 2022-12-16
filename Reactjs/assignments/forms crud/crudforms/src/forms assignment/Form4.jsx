import React, { Component } from 'react'

export default class Form4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Registration:{
            university:"",
            institute:"",
            branch:"",
            degree:"",
            status:"",
            averageCPI:"",
            thSemester:"",
            experience:"",
            yourWebsite:""
         },
         allRegistration:[
            {
                university:"Anurag",
                institute:"VJIT",
                branch:"EEE",
                degree:"B.Tech",
                status:"Complted",
                averageCPI:"80",
                thSemester:"8",
                experience:"0",
                yourWebsite:"http/localhost:3000/"
            }
         ],
         editIndex:null,

      }
    }

    changeregistration=(e)=>{
      var newRegs={...this.state.Registration};
     newRegs[e.target.name]=e.target.value;
     if(e.target.name==="status"){
      this.setState({status:e.target.value})
     }
      this.setState({Registration:newRegs})

    };

    addReg=()=>{
      var newallReg=[...this.state.allRegistration]
      newallReg.push(this.state.Registration)
      this.setState({allRegistration:newallReg});
      this.clearform()
    }

    clearform=()=>{
      var newformReg={
        university:"",
        institute:"",
        branch:"",
        degree:"",
        status:"",
        averageCPI:"",
        thSemester:"",
        experience:"",
        yourWebsite:""
      };
      this.setState({Registration:newformReg})
    }

    deleteReg=(reg)=>{
      var latestReg=this.state.allRegistration.filter((myReg,i)=>
      myReg.institute!==reg.institute )
      this.setState({allRegistration:latestReg})
    };

    editreg=(reg,i)=>{
      this.setState({Registration:reg,editIndex:i})

    }

    updateReg=()=>{
      var newallLatestReg=[...this.state.allRegistration];
      newallLatestReg[this.state.editIndex]=this.state.Registration
      this.setState({allRegistration:newallLatestReg,editIndex:null})
      this.clearform()
    }

    
    
  render() {
    return (
      <div>
        <fieldset>
        <legend>Registration Details</legend>
            <form>
                <label htmlFor="">University:-</label>
                <input type="text" name="university" value={this.state.Registration.university} onChange={(e)=>{this.changeregistration(e)}}/> <br /> <br />
                
                <label htmlFor="">Institute:-</label>
                <input type="text" name="institute" value={this.state.Registration.institute} onChange={(e)=>{this.changeregistration(e)}}/> <br /> <br />

                <select name="branch" value={this.state.Registration.branch} onChange={(e)=>{this.changeregistration(e)}}>
                    <option value="">--select branch</option>
                    <option value="EEE">EEE</option>
                    <option value="ECE">ECE</option>
                    <option value="MECH">MECH</option>
                    <option value="CIVIL">CIVIL</option>
                </select> <br /> <br />
                <select name="degree" value={this.state.Registration.degree} onChange={(e)=>{this.changeregistration(e)}}>
                    <option value="">--select degree</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="M.Tech">M.Tech</option>
                </select>
                <input type="radio" name="status" checked={this.state.Registration.status==="pursuing"} value={"pursuing"} onChange={(e)=>{this.changeregistration(e)}} />
                <label htmlFor="">Pursuing</label>
                <input type="radio" name="status" checked={this.state.Registration.status==="completed"} value={"completed"} onChange={(e)=>{this.changeregistration(e)}}/>
                <label htmlFor="">completes</label> <br /> <br />
                
                <label htmlFor="">averageCPI:-</label>
                <input type="number" name="averageCPI" value={this.state.Registration.averageCPI} onChange={(e)=>{this.changeregistration(e)}} /> upto

                 <input type="number" name="thSemester" value={this.state.Registration.thSemester} onChange={(e)=>{this.changeregistration(e)}}/>
                 <label htmlFor="">thSemester</label> <br /> <br />

                 <label htmlFor="">Experience:-</label>
                 <input type="number" name="experience" value={this.state.Registration.experience} onChange={(e)=>{this.changeregistration(e)}}/> years <br /> <br />
                 <label htmlFor="">yourWebsite:-</label>
                 <input type="text" name="yourWebsite" value={this.state.Registration.yourWebsite} onChange={(e)=>{this.changeregistration(e)}}/> <br />
                 {this.state.editIndex != null ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.updateReg}
            >
              Update Details
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addReg}
            >
              Add Details
            </button>
          )}
        </form>
        </fieldset>

        <div>
            <table className='table'>
                <thead className='table-primary'>
                    <tr>
                        <th>university</th>
                        <th>institute</th>
                        <th>branch</th>
                        <th>Degree</th>
                        <th>status</th>
                        <th>averageCPI</th>
                        <th>thSemester</th>
                        <th>experience</th>
                        <th>yourWebsite</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
               {this.state.allRegistration.map((reg,i)=>(
                <tr key={i}>
                    <td>{reg.university}</td>
                    <td>{reg.institute}</td>
                    <td>{reg.branch}</td>
                    <td>{reg.degree}</td>
                    <td>{reg.status}</td>
                    <td>{reg.averageCPI}</td>
                    <td>{reg.thSemester}</td>
                    <td>{reg.experience}</td>
                    <td>{reg.yourWebsite}</td>

                    <td><button type='button' className='btn btn-primary' onClick={()=>{this.editreg(reg,i)}}>Edit</button></td>

                    <td><button type='button' className='btn btn-danger' onClick={()=>{this.deleteReg(reg)}}>Delete</button></td>
                </tr>
               ))}
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
