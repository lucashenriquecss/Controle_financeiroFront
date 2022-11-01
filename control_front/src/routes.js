import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard.js";

import Home from "./pages/Home.js";

const Routes = () => {
    return (
        <BrowserRouter>
                <Route element={<Home/>} path="/"/>
                <Route element={<Dashboard/>} path="/home"/>
        </BrowserRouter>
    )
}

export default Routes;