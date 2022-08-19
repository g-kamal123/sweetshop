import React, { useState } from 'react'
import classes from './styles/Navbar.module.css'

function Navbar() {
    const [animation,setanimation] = useState(false)
  return (
    <nav className={classes.navbar}>
        <a>Logo</a>
        <div className={classes.srch}>
        <div className={`${classes.srchicon} ${animation? classes.act:classes.inact}`} onClick={()=>setanimation(true)} >
        <i class="fa fa-search" aria-hidden="true" ></i>
        <input />
        </div>
        <div className={animation? classes.active : classes.notactive}>
        <input />
        <span onClick={()=>setanimation(false)}>&times;</span>
        </div>
        <ul>
            <li>Sweetmania</li>
            <li>Catering</li>
            <li>Cart</li>
            <li>Contact Us</li>
        </ul>
        <button>Login</button>
        </div>
    </nav>
  )
}

export default Navbar