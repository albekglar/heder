
import React from 'react'

const NavBarContaner = ({navprod}) => {
  return (
    <div>
        <img src={navprod.image}/>
        
      <p>{navprod.name}</p>
      
    </div>
  )
}

export default NavBarContaner