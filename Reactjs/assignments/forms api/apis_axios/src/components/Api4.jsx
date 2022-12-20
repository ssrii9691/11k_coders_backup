import React, { Component } from 'react'

export default class Api1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:{
            id:"",
            fname:"",
            lname:"",
            tel:"",
            address:"",
            city:"",
            state:"",
            zip:"",
         },
         allusers:[],
         editIndex:null,
      };
      this.getUser=this.getUser.bind(this)
    }

    userChange=(e)=>{
        var newUser={...this.state.users}
        newUser[e.target.name]=e.target.value
        this.setState({users:newUser})
    }

    adduser=()=>{
        fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{
                "content-Type": "application/json",
            },
            body:JSON.stringify(this.state.users),
        }).then((res)=>{
            this.getUser()
        })
        this.clearform();
    }

    clearform=()=>{
        let newform={
            id:"",
            fname:"",
            lname:"",
            tel:"",
            address:"",
            city:"",
            state:"",
            zip:"",
        }
        this.setState({users:newform})
    }

    async getUser(){
        let data= await (await fetch(" http://localhost:3000/users")).json()
        this.setState({allusers:data})
    }

    edituser=(usr,i)=>{
        this.setState({users:usr,editIndex:i})
    }

    updateuser=()=>{
        fetch("http://localhost:3000/users/"+ this.state.users.id,{
            method:"PUT",
            headers:{
                "content-Type": "application/json", 
            },
            body:JSON.stringify(this.state.users),
        }).then((res)=>{
            this.getUser();
        })
        this.setState({editIndex:null});
        this.clearform()
    };

    deleteuser=(usr)=>{
        fetch("http://localhost:3000/users/" + usr.id, {
            method: "DELETE",
          }).then((res) => {
              this.getUser();
          });
        
    }
    
  render() {
    return (
      <div>
         <form>
            <label htmlFor="">Id:</label>
            <input type="text" name="id" value={this.state.users.id} disabled onChange={(e)=>{this.userChange(e)}} /> <br /><br />
            <label htmlFor="">fname:</label>
            <input type="text" name="fname" value={this.state.users.fname}  onChange={(e)=>{this.userChange(e)}} /> <br /><br />
            <label htmlFor="">lname:</label>
            <input type="text" name="lname" value={this.state.users.lname}  onChange={(e)=>{this.userChange(e)}} /> <br /><br />
            <label htmlFor="">tel:</label>
            <input type="text" name="tel" value={this.state.users.tel}  onChange={(e)=>{this.userChange(e)}} /> <br /><br />
            <label htmlFor="">address:</label>
            <input type="text" name="address" value={this.state.users.address}  onChange={(e)=>{this.userChange(e)}} /> <br /><br />
            <label htmlFor="">city:</label>
            <input type="text" name="city" value={this.state.users.city}  onChange={(e)=>{this.userChange(e)}} /> <br /><br />
            <label htmlFor="">state:</label>
            <input type="text" name="state" value={this.state.users.state}  onChange={(e)=>{this.userChange(e)}} /> <br /><br />
            <label htmlFor="">zip:</label>
            <input type="text" name="zip" value={this.state.users.zip}  onChange={(e)=>{this.userChange(e)}} /> <br /><br />

            {this.state.editIndex == null ? (
          <button className="btn btn-primary mt-3" onClick={this.adduser}>
            submit
          </button>
        ) : (
          <button className="btn btn-primary mt-3" onClick={this.updateuser}>
            update
          </button>
        )}
         </form>

         <hr />

         <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>fname</th>
                    <th>lname</th>
                    <th>tel</th>
                    <th>address</th>
                    <th>city</th>
                    <th>state</th>
                    <th>zip</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.allusers.map((usr,i)=>(
                   <tr key={i}>
                   <td>{usr.id}</td>
                   <td>{usr.fname}</td>
                   <td>{usr.lname}</td>
                   <td>{usr.address}</td>
                   <td>{usr.tel}</td>
                   <td>{usr.city}</td>
                   <td>{usr.state}</td>
                   <td>{usr.zip}</td>
                   <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        this.edituser(usr, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.deleteuser(usr);
                      }}
                    >
                      Delete
                    </button>
                  </td>
               </tr>
                ))}
               
            </tbody>
         </table>
      </div>
    )
  }

  async  componentDidMount(){
     let data= await(await (fetch("http://localhost:3000/users"))).json();
     this.setState({allusers:data})
  }
}
