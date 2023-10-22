import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//import ACTIONS
import {
  gamesList,
  setcurrentPage,
  searchByName,
  getGenres,
  getPlatforms,
} from "./02.redux/actions";
//import Components

import LandingPage from "./01.components/01.LandingPage/landingPage";
import Home from "./01.components/02.Home/Home";
import Form from "./01.components/05.Form/Form";
import About from "./01.components/06.About/About";
import Detail from "./01.components/08.DetailPage/Detail";

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, []);

  const handlePageChange = (numPage) => dispatch(setcurrentPage(numPage));

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route
          path="/home"
          element={<Home handlePageChange={handlePageChange} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </div>
  );
};

export default App;
