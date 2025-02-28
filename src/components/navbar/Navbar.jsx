import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'



const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">About Us</a></p>
    <p><a href="#features">Contact</a></p>
    <p><a href="#blog">Blog & News</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          
          <h1>ALSACAM</h1>
        </div>
      </div>

      <div className='gpt3__navbar-links_container'>
         <Menu />
      </div>

      <div className='gpt3__navbar-menu'>
        { toggleMenu 
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> 
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}

        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar