import React from 'react'

const UserformN = ({changeFounder,founder,btnfounder,handlefounder}) => {
  return (
    <div>
       <form action="">
        <label htmlFor="">id:</label>
        <input
          type="text"
          name="id"
          value={founder.id}
          onChange={(e) => {
            changeFounder(e);
          }}
          disabled
        />{" "}
        <br />
        <br />
        <label htmlFor="">email:</label>
        <input
          type="email"
          name="email"
          value={founder.email}
          onChange={(e) => {
            changeFounder(e);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="">username:</label>
        <input
          type="username"
          name="username"
          value={founder.username}
          onChange={(e) => {
            changeFounder(e);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="">country:</label>
        <input
          type="country"
          name="country"
          value={founder.country}
          onChange={(e) => {
            changeFounder(e);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="">phone:</label>
        <input
          type="phone"
          name="phone"
          value={founder.phone}
          onChange={(e) => {
            changeFounder(e);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="">password:</label>
        <input
          type="password"
          name="password"
          value={founder.password}
          onChange={(e) => {
            changeFounder(e);
          }}
        />{" "}
        <br />
        <br />
        <button type='button' className='btn btn-success' onClick={handlefounder}>{btnfounder}</button>
      
      </form>
    </div>
  )
}

export default UserformN
