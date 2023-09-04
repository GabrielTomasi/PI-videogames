//import CORES

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
//import ACTIONS
import { gamesList } from "./02.redux/actions";
//import Components
import LandingPage from "./01.components/01.LandingPage/landingPage";
import Home from "./01.components/02.Home/Home";
import Nav from "./01.components/03.Nav/Nav";
import Form from "./01.components/05.Form/Form";
import About from "./01.components/06.About/About";
import Detail from "./01.components/08.DetailPage/Detail";

const App = () => {
  

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/fav" element=""></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="*" element=""></Route>
      </Routes>
    </div>
  );
};

export default App;
