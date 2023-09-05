//import CORES

import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import ACTIONS
import { gamesList, setcurrentPage, searchByName } from "./02.redux/actions";
//import Components
import LandingPage from "./01.components/01.LandingPage/landingPage";
import Home from "./01.components/02.Home/Home";
import Nav from "./01.components/03.Nav/Nav";
import Form from "./01.components/05.Form/Form";
import About from "./01.components/06.About/About";
import Detail from "./01.components/08.DetailPage/Detail";

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gamesList());
  }, []);

  const allvideogames = useSelector((state) => state.allGames);
  const currentPage = useSelector((state) => state.currentPage);
  const gamesPerPage = 15;
  const totalPage = Math.ceil(allvideogames.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;
  const currentGames = allvideogames.slice(startIndex, endIndex);



  const handlePageChange = (numPage) => { //seteadora de paginas: maneja la pag actual despachando la action que 
    dispatch(setcurrentPage(numPage));    //genera la nueva pagina
  };

  const onSearch =  (name)=>{
    dispatch(searchByName(name))
 }
  return (
    <div className="App">
      {location.pathname !== "/" && <Nav  onSearch={onSearch}/>}

      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route
          path="/home"
          element={
            <Home
              currentGames={currentGames}
              currentPage={currentPage}
              totalPage={totalPage}
              handlePageChange={handlePageChange}
            />
          }
        ></Route>
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
