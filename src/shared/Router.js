import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { RecoilRoot } from "recoil";
import About from "../pages/About";
import Board from "../pages/Board";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp"
import Write from "../pages/Write";
import Header from "../redux/components/Header";


const Router = () => {
    return (
        <BrowserRouter>
            {/* <RecoilRoot> */}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/board" element={<Board />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/write/:id" element={<Write />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            {/* </RecoilRoot> */}
        </BrowserRouter>
    )
}

export default Router;