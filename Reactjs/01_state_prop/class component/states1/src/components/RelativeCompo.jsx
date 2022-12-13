import React, { Component } from 'react'
import Nav from './Nav'

export default class RelativeCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         startingMessage:"here is we gooooo....!!!!!",
         employee:{
            empname:"sai",
            role:"developer"
         }

      }
    }
    changemessage=()=>{
        this.setState({startingMessage:"changed message here...."})
    }
    

  render() {
    
    return (
      <div>
        <h2>welcome to ss infra pvt.limited</h2>
        {/* <Nav {...this.state}/> */}
        <Nav chat={this.state.startingMessage} handlechange={this.changemessage}/>
      </div>
    )
  }
}
