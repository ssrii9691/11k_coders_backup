import React, { Component } from 'react'
import Hoc from './Hoc'

class Click extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.MakeIncrement} >click</button>
        <h2>you clicked {this.props.count} times!!</h2>
      </div>
    )
  }
}
export default Hoc(Click)
