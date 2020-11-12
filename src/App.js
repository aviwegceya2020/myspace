// import './App.css';
import React from "react";
import CreateAccount from "./pages/account/CreateAccount";
import Header from "./components/layout/header/Header";
import About from "./pages/about/About"
import Login from "./pages/account/Login"
import Signup from "./pages/account/Signup";
import Contact from "./pages/contact/Contact"
import Home from "./pages/home/Home";
import Navbar from "./components/layout/navigation/Navbar"
import Dashboard from "./pages/home/Dashboard"
import Dash from "./pages/home/Dash"
import Complaint from "./pages/complaints/Complaint"
import logo from "./assets/logo.png"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
