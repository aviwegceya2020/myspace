import React from 'react'
// import Navbar from "../components/Navbar"

export default function CreateAccount() {

    return (
        <section className="form section">
            <h2 className="section-title">Update Account</h2>
            <form className="login-form">
                <div className="form-control">
                    <label htmlFor="name">name*</label>
                    <input
                        type="text"
                        id="name">
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor="surname">surname*</label>
                    <input
                        type="text"
                        id="surname">
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor="surname">gender*</label>
                    <input
                        type="text"
                        id="surname">
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor="surname">phone number</label>
                    <input
                        type="text"
                        id="surname">
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor="room">Room number*</label>
                    <input
                        type="text"
                        id="room">
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor="building">Building name</label>
                    <input
                        type="text"
                        id="building">
                    </input>
                </div>
                <button type="submit"
                    className="btn btn-block btn-primary">
                    Submit
                </button>
            </form>
        </section>

    )
}
