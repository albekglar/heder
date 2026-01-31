import { dateNav } from './NavBar'
import NavBars from './NavBars'
import './NavBar.css'

const NavBarlist = () => {
  return (

  
    <div className='navbar__conteiner'>

      <div className='navbar__content'>
          {dateNav.map(item => (
              <NavBars key={item.id} usenav={item}/>
          ))} 
      </div>

          <button className='navbar__button'>Статус заказа</button>


          <div className='navbar__auth'>
              <p>звоните в контакт-центр 9:00 - 21:00</p>
                  <p> +7 (3532) 99-77-77  </p>
            </div> 



    </div>
  )
}

export default NavBarlist