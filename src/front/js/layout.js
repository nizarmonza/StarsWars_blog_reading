import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planets } from "./pages/planets";
import { People } from "./pages/people";
import { PlanetDetails } from "./pages/planetsdetails";



export const Favorites = React.createContext();

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    const [fav, setFav]= useState([]);
    const myfav = {fav, setFav};

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Favorites.Provider value={myfav}>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Planets />} path="/planets" />
                        <Route element={<People />} path="/people" />
                        <Route element={<PlanetDetails />} path="/planetdetails/:index" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                    </Favorites.Provider>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
