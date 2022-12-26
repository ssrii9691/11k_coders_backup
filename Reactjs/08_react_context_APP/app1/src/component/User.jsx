import React from 'react'
import { ContextConsumer } from './Context'

const User = () => {
  return (
    <div>
     <ContextConsumer>
        {(userinfo)=>(
         <ul>
            {userinfo.map((user,i)=>(
               <li key={i}>{user}</li>
            ))}
         </ul>
        )}
     </ContextConsumer>
    </div>
  )
}

export default User
