import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planets } from "./pages/planets.js";
import { People } from "./pages/people.js";
import { Vehicles } from "./pages/vehicles.js";
import { PlanetDetails } from "./pages/planetdetails.js";
import { PersonDetails } from "./pages/persondetails.js";
import { VehicleDetails } from "./pages/vehicledetails.js";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Planets />} path="/planets" />
            <Route element={<People />} path="/people" />
            <Route element={<Vehicles />} path="/vehicles" />
            <Route element={<PlanetDetails />} path="/planets/:id" />
            <Route element={<PersonDetails />} path="/people/:id" />
            <Route element={<VehicleDetails />} path="/vehicles/:id" />

            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
