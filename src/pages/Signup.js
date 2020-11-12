import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom"
import Login from "./Login"

export default function Signup() {

    const [password, setPassword] = useState('');
    const handleSignup = (e) => {
        e.preventDefault();

    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <section className="form section">
            <h2 className="section-title">Sign Up</h2>
            <form className="login-form" onSubmit={handleSignup}>
                <div className="form-control">
                    <label htmlFor="email">email*</label>
                    <input
                        type="email"
                        id="email">
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor="email">username*</label>
                    <input
                        type="username"
                        id="username">
                    </input>
                </div>
                <div className="form-control">
                    <label>Password*</label>
                    <input type="password"
                        id="password"
                        value={password}
                        onChange={handlePassword}>
                    </input>
                </div>

                {/* {isEmpty && (
                    <p className="form-empty">please fill out all form fields</p>
                )} */}

                <button type="submit"
                    className="btn btn-block btn-primary">
                    Signup
                </button>
                <p className="register-link">Already have an account?
                <button type="button" onClick={"./Signup.js"}>{<Link to="./login" className="">Login</Link>}</button>
                </p>
            </form>
        </section>
    )
}
