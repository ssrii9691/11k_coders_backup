import React from 'react'
import {useNavigate} from 'react-router-dom'

const UserTb = ({fou}) => {
    const navigate=useNavigate();
    const deletefounder=(fou)=>{
     navigate("/delete/"+fou.id)
    };
    const editfounder=(fou)=>{
        navigate("/edit/"+fou.id)
    }

  return (
    <tr>
        <td>{fou.id}</td>
        <td>{fou.username}</td>
        <td>{fou.email}</td>
        <td>{fou.country}</td>
        <td>{fou.phone}</td>
        <td>{fou.password}</td>
        <td>
            <button className='btn btn-danger' onClick={()=>{editfounder(fou)}} type='button' > edit

            </button>
        </td>
        <td>
            <button className='btn btn-warning' onClick={()=>{deletefounder(fou)}} type='button'>
             delete
            </button>
        </td>
    </tr>
  )
}

export default UserTb
