import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { fire } from "../src/firebase";
import Contacts from "./components/Contacts";
import Blogs from "./components/Blogs/Blogs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Formatter from './components/Formatter/Formatter'
function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route path="/" exact component={Blogs} />
          <PrivateRoute exact path="/dashboard" component={Contacts} />
          <Route path="/login" exact component={Login} />
          <Route path="/blog/:key" exact component={Formatter} />
          <div className="footer">Made by Priyank 🦅</div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
