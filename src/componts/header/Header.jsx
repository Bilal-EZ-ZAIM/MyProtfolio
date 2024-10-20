import React from 'react'
import { useState } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  const [toogl, settoogl] = useState(false);
  const handlToogl = ()=>{
    settoogl(!toogl)
  }
  return (
    <header className='header'>
      <div className="contenre center-row-sp">
        <div className="header-logo center-col-sr">
          <h2>Bila<span className='color'>NOX</span> </h2>
        </div>
        <ul className={`center-row-ar ${toogl&&'center-col-ar blockc'}`}>
          <li> <NavLink  to='/'> Home </NavLink></li>
          <li> <NavLink  to='/about'> About </NavLink></li>
          <li> <NavLink  to='/serves'> Services </NavLink></li>
          <li> <NavLink  to='/protfolio'> Projects </NavLink></li>
          <li> <NavLink  to='/countact'> Contact </NavLink></li>
        </ul>
        <i onClick={handlToogl} className={`fa fa-${toogl?'x':'bars'} dis`}></i>
      </div>
    </header>
  )
}
export default Header