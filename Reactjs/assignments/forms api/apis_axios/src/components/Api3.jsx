import React, { Component } from 'react'
import axios from 'axios'

export default class Api3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        batches:{
            id:"",
            name:"",
            username:"",
            email:"",
            password:"",
            confirmPassword:"",
            message:""

         },
         allbatches:[
           
         ],
         editIndex:null,
      
      }
    }

    getbatch=()=>{
        axios.get("http://localhost:3000/batches/").then((res)=>{
            this.setState({allbatches:res.data})
        })
    }

    batchchange=(e)=>{
        var newbatch={...this.state.batches};
        newbatch[e.target.name]=e.target.value
        this.setState({batches:newbatch})
    }

    addBatch=()=>{
        axios.post("http://localhost:3000/batches/",this.state.batches).then(()=>{
            this.getbatch()
        })
        this.clearform()
    }
    clearform=()=>{
       var newform= {
        id:"",
            name:"",
            username:"",
            email:"",
            password:"",
            confirmPassword:"",
            message:""
         }
         this.setState({batches:newform})
    }
    editbatch=(bat,i)=>{
        this.setState({batches:bat,editIndex:i})
    }
    deletebatch=(bat)=>{
        axios.delete("http://localhost:3000/batches/"+bat.id).then(()=>{
            this.getbatch()
        })
    }
    updateBatch=()=>{
        axios.put(("http://localhost:3000/batches/"+this.state.batches.id),this.state.batches).then(()=>{
            this.getbatch()
        })
        this.clearform()
        this.setState({ editIndex: null });
    }

    
  render() {
    return (
      
        <div>
        <form>
        <label htmlFor="">Id:</label>
            <input
              type="text"
              name="id"
              disabled
              value={this.state.batches.id}
              onChange={(e) => {
                this.batchchange(e);
              }}
            />{" "}
            <br /> <br />
            <label htmlFor="">Name:-</label> 
            <input type="text" name="name"  value={this.state.batches.name} onChange={(e)=>{this.batchchange(e)}}  /> <br />
            <label htmlFor="">userName:-</label>
            <input type="text" name="username" value={this.state.batches.username} onChange={(e)=>{this.batchchange(e)}}/> <br />
            <label htmlFor="">Email:-</label>
            <input type="text" name="email" value={this.state.batches.email} onChange={(e)=>{this.batchchange(e)}}/> <br />
            <label htmlFor="">Password:-</label>
            <input type="text" name="password" value={this.state.batches.password} onChange={(e)=>{this.batchchange(e)}}/> <br />
            <label htmlFor="">confirmPassword:-</label>
            <input type="text" name="confirmPassword" value={this.state.batches.confirmPassword} onChange={(e)=>{this.batchchange(e)}}/> <br />
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
                    <th>id</th>
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
                        <td>{bat.id}</td>
                        <td>{bat.name}</td>
                        <td>{bat.username}</td>
                        <td>{bat.email}</td>
                        <td>{bat.password}</td>
                        <td>{bat.confirmPassword}</td>
                        <td>{bat.message}</td>

                        <td>
                            <button type='button' className="btn btn-warning" onClick={()=>{this.editbatch(bat,i)}}>Edit</button>
                        </td>
                        <td>
                            <button type='button'  className="btn btn-primary" onClick={()=>{
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

  async componentDidMount(){
     var create=await axios.get("http://localhost:3000/batches")
     this.setState({allbatches:create.data})
  }
}
