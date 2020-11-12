import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="vintage tech logo" className="logo" />
            <nav>
                <ul>
                    <div>
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                        {/* <li>
                            <Link to="/about">About Us</Link>
                        </li> */}
                        <li>
                            <Link to="/login">Log In</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                        {/* <li>
                            <Link to="/Complaint">Complaint</Link>
                        </li> */}



                    </div>
                    <div>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
