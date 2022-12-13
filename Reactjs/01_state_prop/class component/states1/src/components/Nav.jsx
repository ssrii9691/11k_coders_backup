import React, { Component } from 'react'

export default class Nav extends Component {
    constructor(props) {
      super(props)
    
     
    }
    
  render() {
    const {handlechange,chat} = this.props
    return (
      <div >
        <button onClick={handlechange}>click to change</button>
       <p style={{background:"yellow",color:"black"}}> {chat}</p>
      </div>
    )
  }
}


