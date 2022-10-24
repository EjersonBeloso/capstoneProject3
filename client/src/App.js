import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage/index.js";
import LoginPage from "./pages/LoginPage/index.js";
import RegisterPage from "./pages/RegisterPage/index.js";
import UserPage from "./pages/UserPage/index.js";
import ResetPage from "./pages/ResetPage/index.js";
import NewPasswordPage from "./pages/NewPasswordPage/index.js";
import NewBlog from "./pages/UserPage/Partials/NewBlog/index.js"

function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      {user && <Route path="/user" element={<UserPage/>}/> }
      {user && <Route path='/new-blog' element={<NewBlog/>}/>}
      <Route path="/" element={<LandingPage/>} />
      <Route exact path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/reset-password" element={<ResetPage/>} />
      <Route path="/reset/new-password/:id/:token" element={<NewPasswordPage/>}/>

      <Route path="/user" exact element={<Navigate replace to="/login"/>} />
      <Route path="/new-blog" exact element={<Navigate replace to="/"/>} />
    
    </Routes>
  );
}

export default App;
