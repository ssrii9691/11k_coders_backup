import React from 'react'
import GrandChild from './GrandChild'

const Child = () => {
  return (
    <div>
      <h2>hello from child component</h2>
      <GrandChild/>
    </div>
  )
}

export default Child
