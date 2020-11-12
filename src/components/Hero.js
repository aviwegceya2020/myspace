import React from "react";
// import Navbar from "./Navbar";

export default function Hero({ children }) {
    return (
        <>
            <div className="hero">
                <div className="banner">
                    <h1>Welcome to My Space App</h1>
                    <p>We got you covered for all your accommodation solutions</p>
                    {children}
                </div>
            </div>
        </>
    );
}
