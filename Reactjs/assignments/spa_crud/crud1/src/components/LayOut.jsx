import React from 'react'
import {Outlet} from 'react-router-dom'
const LayOut = () => {
  return (
    <div>
      <h2>crud application of sai website</h2>
       <Outlet/>
    </div>
  )
}

export default LayOut
