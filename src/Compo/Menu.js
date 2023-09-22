import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Menu() {
    const [toggle, setToggle] = useState(false);
    const toggleMenu = () => {
        setToggle(!toggle);
    }
    const shutmenu = () => {
        setToggle(false);
    }
    const menustyle = {
        display: toggle ? "block" : "none"
    };

    return (
        <div>
            <button className='menubutton buttons' onClick={toggleMenu}>
                <img src='https://cdn-icons-png.flaticon.com/512/4663/4663114.png' alt="not found" style={{ width: "100%", height: "7vh" }} />
            </button>
            <div className='navbar' id='navbarid' style={menustyle}>
                <div className="navflex">
                    <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/" onClick={shutmenu}><h3>Home</h3></NavLink>
                    <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/Bollywood" onClick={shutmenu}><h3>Bollywood</h3></NavLink>
                    <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/Technology" onClick={shutmenu}><h3>Technology</h3></NavLink>
                    <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/Hollywood" onClick={shutmenu}><h3>Hollywood</h3></NavLink>
                    <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/Fitness" onClick={shutmenu}><h3>Fitness</h3></NavLink>
                    <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/Food" onClick={shutmenu}><h3>Food</h3></NavLink>
                </div>
            </div >
        </div>
    )
}

export default Menu