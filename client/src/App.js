import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes, BrowserRouter } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import Page from "./components/page.js";
import {CssBaseline} from '@mui/material';


const App = () =>{
  return (
    <React.Fragment>
      <CssBaseline/>
  <BrowserRouter>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/page" element={<Page/>}/>
     </Routes>
   </BrowserRouter>
   </React.Fragment>
  );
}

export default App;