import React from 'react'
import Hero from "../components/Hero"
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <>
            
            <Hero>
                <Link to="/signup" className="btn btn-primary btn-hero">SignUp</Link>
            </Hero>

        </>
    )
}
