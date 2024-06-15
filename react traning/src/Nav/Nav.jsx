import { useState } from 'react'
import './Nav.css'
import {BackDrop} from './BackDrops'
const links = [
    'Головна',
    'Послуги',
    'Ціни',
    'Відгуки',
    'Сертифікати',
    'Статті',
    'Контакти'
  ]
  const Nav = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [hideOrShow,setHideOrShow] = useState({})

    const handleMenu = () => {
        setIsOpen((prev) => !prev)
        if(isOpen) {
            setHideOrShow(() => {
                return {}
            })
        } else {
            setHideOrShow(() => {
                return { display: "flex"}
        })
        }
    }
    
    return(
      <div className='nav__container'>
        <div className="nav__wrapper">
          {isOpen ? <button onClick={handleMenu}>Close</button> : <button onClick={handleMenu}>Open</button>}
          {isOpen ? <BackDrop handleMenu={handleMenu}/> : null}
          <div className="nav nav__vision" style={hideOrShow} >
            <nav className='nav__body'>
              <ul className='nav__list'>
                {links.map((link,index)=>{
                  return(
                    <li className='nav__list__item' key={index}>
                      <a href="/#" className='nav__list__link'>
                        {link}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
  
  export {Nav}