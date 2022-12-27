import React from 'react'
import { ContextConsumer } from './Mycontext'

const Teatime = () => {
  return (
    <div>
      <ContextConsumer>
        {(userinfo)=>(
         <ul>
             { userinfo.map((user,i)=>(
            <li key={i}>{user}</li>
        ))}
         </ul>
        )}
      </ContextConsumer>
    </div>
  )
}

export default Teatime
