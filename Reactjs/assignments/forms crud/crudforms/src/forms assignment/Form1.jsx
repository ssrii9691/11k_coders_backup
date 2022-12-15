import React, { Component } from 'react'

export default class Form1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         batches:{
            name:"",
            username:"",
            email:"",
            password:"",
            confirmPassword:"",
            message:""

         },
         allbatches:[
            { 
            name:"sai",
            username:"ssri9691",
            email:"telusuko@google.com",
            password:"00000",
            confirmPassword:"00000",
            message:" here sai information written"}
         ],
         editIndex:null,
      }
    }

    batchchange=(e)=>{
     var newbatch={...this.state.batches}
     newbatch[e.target.name]=e.target.value
     this.setState({batches:newbatch})
    };
    addBatch=()=>{
        var newallbatch=[...this.state.allbatches]
        newallbatch.push(this.state.batches)
        this.setState({allbatches:newallbatch})
        this.clearform();
    };

    clearform=()=>{
        var newform={
            name:"",
            username:"",
            email:"",
            password:"",
            confirmPassword:"",
            message:""
        };
        this.setState({batches:newform})
    }
    editbatch=(bat,i)=>{
      this.setState({batches:bat,editIndex:i})
    }

    deletebatch=(bat)=>{
     var latestbatch=this.state.allbatches.filter(
        (mybatch)=> mybatch.email!==bat.email)
        this.setState({allbatches:latestbatch})
    }
    updateBatch=()=>{
        var latestbatch=[...this.state.allbatches];
        latestbatch[this.state.editIndex]=this.state.batches;
        this.setState({allbatches:latestbatch,editIndex:null})
        this.clearform()
    }

    
  render() {
    return (
      <div>
        <form>
            <label htmlFor="">Name:-</label> 
            <input type="text" name="name"  value={this.state.batches.name} onChange={(e)=>{this.batchchange(e)}}  /> <br />
            <label htmlFor="">userName:-</label>
            <input type="text" name="username" value={this.state.batches.username} onChange={(e)=>{this.batchchange(e)}}/> <br />
            <label htmlFor="">Email:-</label>
            <input type="text" name="email" value={this.state.batches.email} onChange={(e)=>{this.batchchange(e)}}/> <br />
            <label htmlFor="">Password:-</label>
            <input type="text" name="password" value={this.state.batches.password} onChange={(e)=>{this.batchchange(e)}}/> <br />
            <label htmlFor="">confirmPassword:-</label>
            <input type="text" name="confirmpassword" value={this.state.batches.confirmPassword} onChange={(e)=>{this.batchchange(e)}}/> <br />
            <label htmlFor="">Message:- <br /> 
            <textarea name="message" cols="30" rows="2" value={this.state.batches.message} onChange={(e)=>{this.batchchange(e)}}></textarea> </label> <br />

            {this.state.editIndex !== null ? (
            <button type="button" onClick={this.updateBatch}>
              updateBatch
            </button>
          ) : (
            <button type="button"  className="btn btn-danger" onClick={this.addBatch}>
            
              add Batch
            </button>
          )}
        </form>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>userName</th>
                    <th>email</th>
                    <th>password</th>
                    <th>confirmPassword</th>
                    <th>Message</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.allbatches.map((bat,i)=>(
                    <tr key={i}>
                        <td>{bat.name}</td>
                        <td>{bat.username}</td>
                        <td>{bat.email}</td>
                        <td>{bat.password}</td>
                        <td>{bat.confirmPassword}</td>
                        <td>{bat.message}</td>

                        <td>
                            <button  className="btn btn-warning" onClick={()=>{this.editbatch(bat,i)}}>Edit</button>
                        </td>
                        <td>
                            <button className="btn btn-primary" onClick={()=>{
                                this.deletebatch(bat)
                            }}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

      
      </div>
    )
  }
}
