import React from 'react';
import Home from './Home';
import Bollywood from './Bollywood';
import Technology from './Technology';
import Hollywood from './Hollywood';
import Fitness from './Fitness';
import Food from './Food';
import News from './News';
import DataStore from '../DataStore/DataStore';

import { Routes, Route, NavLink } from 'react-router-dom';

function Main() {
    return (
        <>
            <h1 className='heading' style={{ padding: 0, textAlign: "center" }}><span id='rotate'>The</span> <span className='siren'>Siren</span></h1>
            <span className='dummybut' style={{ display: "none" }}>Get Started</span>

            <div className="navflex">
                <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/"><h3>Home</h3></NavLink>
                <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/Bollywood"><h3>Bollywood</h3></NavLink>
                <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/Technology"><h3>Technology</h3></NavLink>
                <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/Hollywood"><h3>Hollywood</h3></NavLink>
                <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/Fitness"><h3>Fitness</h3></NavLink>
                <NavLink className='navlink' style={({ isActive }) => ({ color: isActive ? "grey" : "" })} to="/Food"><h3>Food</h3></NavLink>
            </div>
            <hr className='navhr'></hr>
            <DataStore>
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/Bollywood" element={<Bollywood />}></Route>
                    <Route path="/Technology" element={<Technology />}></Route>
                    <Route path="/Hollywood" element={<Hollywood />}></Route>
                    <Route path="/Fitness" element={<Fitness />}></Route>
                    <Route path="/Food" element={<Food />}></Route>
                    <Route path="/news/:id" element={<News />} />
                </Routes>
            </DataStore>

        </>
    )
}

export default Main