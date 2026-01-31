import React from 'react'
import { dateproduct } from './DateNavBar'
import NavBarContaner from './NavBarContaner'
import './NavBarProductlist.css'



const NavBarProductlist = () => {
  return (
    <div className='style2'>
        {dateproduct.map(item => (
            <NavBarContaner key={item.id} navprod={item} />
        ))}
    </div>
  )
}

export default NavBarProductlist