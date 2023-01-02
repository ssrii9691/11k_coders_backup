import React, { Component } from 'react'

const Hoc = (MainComponent) => {
  class sampleHOCcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }
    MakeIncrement=()=>{
        this.setState({count:this.state.count+1});
    }
    
      render() {
        return (
         <MainComponent count={this.state.count} MakeIncrement={this.MakeIncrement}/>
        )
      }
    }
    
  return sampleHOCcomponent
}

export default Hoc
