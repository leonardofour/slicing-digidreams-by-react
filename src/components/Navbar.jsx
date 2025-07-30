import React from "react";
import "./Navbar.css"

export default function Navbar(){
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="src\assets\Digi Dreams Space Logo_White 1.svg" alt="digidream" />
            </div>

            <ul className="nav-menu">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Harga</a></li>
                <li><a href="#">FaQ</a></li>
                <li><a href="#">Testimoni</a></li>
            </ul>

            <div className="nav-button">
                <button className="btn-sign">Sign In</button>
                <button className="btn-reservasi">Reservasi</button>
            </div>
        </nav>
    )
}