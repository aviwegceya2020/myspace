// import './App.css';
import React from "react";
import CreateAccount from "./pages/CreateAccount";
import Header from "./components/Header";
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Contact from "./pages/Contact"
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Dash from "./pages/Dash"
import Complaint from "./pages/Complaint"
import logo from "./assets/logo.png"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tenants from "./pages/Tenants";

// react admin
// import { Admin, Resource } from 'react-admin'
// import restProvider from 'ra-data-simple-rest'
// import PostList from "./components/PostList"

export default function App() {
  return (
    // Admin
    // <Admin dataProvider={restProvider('http://localhost:3000')}>
    //   <Resource name="posts" List={PostList}></Resource>
    // </Admin>
    // Admin

    <Router>
      <Navbar></Navbar>

      {/* <img src={logo} alt="vintage tech logo" className="logo" /> */}
      {/* <Header></Header> */}

      {/* <Home></Home> */}
      {/* <Login></Login> */}
      {/* <Dashboard></Dashboard> */}
      <Switch>
        {/* <Route exact path="/home">
          <Home></Home>
        </Route> */}
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route exact path="/Login">
          <Login></Login>
        </Route>
        <Route path="/tenants">
          <Tenants></Tenants>
        </Route>
        <Route path="/Signup">
          <Signup></Signup>
        </Route>
        <Route path="/CreateAccount">
          <CreateAccount></CreateAccount>
        </Route>
        <Route path="/Complaints">
          <Complaint></Complaint>
        </Route>
        <Route path="/Dash">
          <Dash></Dash>
        </Route>
        <Route>
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
}

// export default App;
