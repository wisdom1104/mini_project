import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApiTest from "../pages/ApiTest";
import About from "../pages/About";
import Board from "../pages/Board";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Write from "../pages/Write";
import Header from "../redux/components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/board" element={<Board />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/test" element={<ApiTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
