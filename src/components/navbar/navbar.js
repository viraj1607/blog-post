import {useState } from "react";
import './navbar.css'
import { HiMenu, HiOutlineX } from "react-icons/hi";
import {NavLink} from "react-router-dom";



const Navbar=()=>{
    const [showNavLinks, setShowNavLinks]=useState(false);
    let navlinks=[
        {catagory:"Home", to:""},
        {catagory:"Bollywood", to:"bollywood"},
        {catagory:"Technology", to:"technology"},
        {catagory:"Hollywod", to:"hollywood"},
        {catagory:"Fitness", to:"fitness"},
        {catagory:"Food", to:"food"},
    ]

        return(
            <div className="navbar-container">
                <div className="logo">
                    <h4>The</h4>
                    <h1>Siren</h1>
                </div>
                <ul className={showNavLinks?"nav-links-mobile":"nav-links"}>
                    {navlinks.map((item,index)=>{
                        return(
                            <li><NavLink key={index} to={`/${item.to}`} activeClassName="active" exact>{item.catagory}</NavLink></li>
                        )
                    })}
                    <NavLink to="/register"><li className="button">Login/Signup</li></NavLink>
                </ul>
                <div className="menu-btn" onClick={()=>setShowNavLinks(!showNavLinks)}>
                   {showNavLinks?<HiOutlineX />:<HiMenu/>}
                </div>
                <hr/>
            </div>
        )
}

export default Navbar;