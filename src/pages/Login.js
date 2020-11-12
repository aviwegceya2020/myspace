
import Signup from "./Signup";
import { Link } from "react-router-dom"
import React, { useState } from "react"
import { useHistory } from "react-router-dom";


export default function Login() {
    // const [email, setEmail] = React.useState("");
    // const [password, setPassword] = React.useState("");
    // let isEmpty = !email || !password || alert.show;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let hardcodedCred = {
            email: "aviwegceya@gmail.com",
            password: "123456"
        }

        if ((email == hardcodedCred.email) && (password == hardcodedCred.password)) {
            //combination is good. Log them in.
            //this token can be anything. You can use random.org to generate a random string;
            const token = '123456abcdef';
            sessionStorage.setItem('auth-token', token);
            //go to www.website.com/todo
            history.push("/Complaint");
        } else {
            //bad combination
            alert('wrong email or password combination');
        }
    }
    return (
        <section className="form section">
            <h2 className="section-title">Log In</h2>
            <form className="login-form" onSubmit={handleLoginSubmit}>
                <div className="form-control">
                    <label htmlFor="email">email*</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}>
                    </input>
                </div>
                <div className="form-control">
                    <label>Password*</label>
                    <input type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}>
                    </input>
                </div>
                {/* {isEmpty && (
                    <p className="form-empty">please fill out all form fields</p>
                )} */}

                <button type="submit"
                    className="btn btn-block btn-primary">
                    LogIn
                </button>

                <p className="register-link">Don't have an account?
                <button type="button" onClick={"/signup"}>{<Link to="./signup" className="">Signup</Link>}</button>
                </p>
            </form>
        </section>
    )
}