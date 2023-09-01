import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";


import LandingPage from "./01.components/01.LandingPage/landingPage";
import Home from "./01.components/02.Home/Home";
import Nav from "./01.components/03.Nav/Nav";
import Form from "./01.components/05.Form/Form";
import About from "./01.components/06.About/About";
const App = () => {
  return (
    <div className="App">
      <Nav/>

      <Routes>
      
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/detail/:id" element=""></Route>
      <Route path="/fav" element=""></Route>
      <Route path="/form" element={<Form/>}></Route>
      <Route path="*" element=""></Route>
      </Routes>
      
    </div>
  );
}

export default App;
