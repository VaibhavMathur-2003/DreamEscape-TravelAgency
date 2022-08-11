import React, { useState } from 'react'
import "./Navbar.css"
import Navlist from './Navlist';


function Navbar() {
  const [Menu, setMenu] = useState(false)
  return (
    <>
    <div className="navbar">
        <div className="logo">
          <img src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?w=2000" alt="" />
          
        </div>
        <div className="heading">
        Dare to live the life you've always wanted
        </div>
        <div className="menuButton">
          <button onClick={()=>setMenu(!Menu)}>≡</button>
        </div>
    </div> 
    <div className='menu' style={{position : "sticky", top:"0", zIndex:"10"}} >
    {Menu && <Navlist/>}
    </div>
</>
)
}

export default Navbar;