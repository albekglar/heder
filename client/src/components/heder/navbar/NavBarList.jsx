import { dateNav } from './NavBar'
import NavBars from './NavBars'
import './NavBar.css'

const NavBarlist = () => {
  return (
    <div className='style'>
          {dateNav.map(item => (
              <NavBars key={item.id} usenav={item}/>
          ))}
    </div>
  )
}

export default NavBarlist