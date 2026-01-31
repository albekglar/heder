
import { dateproduct } from './DateNavBar'
import NavBarContaner from './NavBarContaner'
import './NavBarProductlist.css'
import logo from '../../image/logo.svg'
import foto from '../../image/foto.svg'
import faunt from '../../image/faund.svg'





const NavBarProductlist = () => {
  return (
    <div className='navbar__product__conteiner'>

      <img
        className='navbar__product__img'
       style={{width:'250px'}} src={logo} />

            <button className='navbar__product__faund'>
              <img src={faunt} alt="" />
            </button>
      <input className='navbar__product__input'
        placeholder='Найти дрель' />

      <button className='navbar__product__button'>
        <img
          className='navbar__product__img'
          src={foto}
          alt="Поиск"
          style={{ width: '20px', height: '20px' }}
        />
      </button>
        

        <div className='navbar__product__content'>

          {dateproduct.map(item => (
              <NavBarContaner key={item.id} navprod={item} />
          ))}
        </div>

    </div>
  )
}

export default NavBarProductlist