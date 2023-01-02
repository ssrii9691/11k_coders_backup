import React, { Component } from 'react'
import Hoc from './Hoc'


 class Hover extends Component {
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.MakeIncrement} > on mouse hover</h2>
        <h2>you hovered{this.props.count} times</h2>
      </div>
    )
  }
}
export default Hoc(Hover)