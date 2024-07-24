import React from 'react'

const User = (props) => {
  return (
    <div className="user-card">
        <h2>Name:{props.name}</h2>
        <h3>Location:Bangalore</h3>
        <h4>Contact:9606207324</h4>
    </div>
  )
}

export default User