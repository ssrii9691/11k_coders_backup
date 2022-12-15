import React, { Component } from 'react'

export default class Form2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Details:{
            street:"",
            city:"",
            state:"",
            zipcode:"",
            country:""
         },
         alldetails:[
            {
                street:"saibhai colony",
                city:"tandur",
                state:"telangana",
                zipcode:"501141",
                country:"india"
             },
         ],
         editindex:null,
      }
    }

    detailschange=(e)=>{
      var newDetails={...this.state.Details}
      newDetails[e.target.name]=e.target.value
      this.setState({Details:newDetails})
    };

    addDetails=()=>{
      var newalldetails=[...this.state.alldetails]
      newalldetails.push(this.state.Details)
      this.setState({alldetails:newalldetails})
      this.clearform()
    }
    clearform=()=>{
      var newForm={
        
          street:"",
          city:"",
          state:"",
          zipcode:"",
          country:""
       
      }
      this.setState({Details:newForm})
    }
    editDetails=(det,i)=>{
     this.setState({Details:det,editindex:i})
    }

    deleteDetail=(det)=>{
      var latestDetails=this.state.alldetails.filter((mydetail)=>mydetail.country!==det.country)
      this.setState({alldetails:latestDetails})
    }

    updateDetails=()=>{
      var latestNewDetails=[...this.state.alldetails];
      latestNewDetails[this.state.editindex]=this.state.Details
      this.setState({alldetails:latestNewDetails,editindex:null})
      this.clearform()
    }
    
  render() {
    return (
      <div>
        <h2>Address <hr /></h2>

        <div>
            <form >
                <label htmlFor="">street:-</label>
                <input type="text" name='street' value={this.state.Details.street} onChange={(e)=>{this.detailschange(e)}} /> <br />
                
                <label htmlFor="">city:-</label>
                <input type="text" name='city' value={this.state.Details.city} onChange={(e)=>{this.detailschange(e)}}/> <br />
                
                <label htmlFor="">state:-</label>
                <input type="text" name='state' value={this.state.Details.state} onChange={(e)=>{this.detailschange(e)}}/> <br />
                
                <label htmlFor="">zipcode:-</label>
                <input type="text" name='zipcode' value={this.state.Details.zipcode} onChange={(e)=>{this.detailschange(e)}}/> <br />
                
                <label htmlFor="">country:-</label>
                <input type="text" name='country' value={this.state.Details.country} onChange={(e)=>{this.detailschange(e)}}/> <br />

                {this.state.editindex!==null ? ( <button type="button" className='btn btn-primary' onClick={this.updateDetails}>updateDetails</button> ):( <button type="button" className='btn btn-warning' onClick={this.addDetails}>addDetails</button> )}
            </form>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>street</th>
                <th>city</th>
                <th>state</th>
                <th>zipcode</th>
                <th>country</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
               {this.state.alldetails.map((det,i)=>(
                <tr key={i}>
                  <td>{det.street}</td>
                  <td>{det.city}</td>
                  <td>{det.state}</td>
                  <td>{det.zipcode}</td>
                  <td>{det.country}</td>

                  <td><button className='btn btn-primary' onClick={()=>{this.editDetails(det,i)}}>Edit</button></td>
                  <td><button className='btn btn-danger' onClick={()=>{this.deleteDetail(det)}}>Delete</button></td>
                </tr>
               ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
