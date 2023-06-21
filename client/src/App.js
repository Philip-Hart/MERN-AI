import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// We import all the components we need in our app
import Navbar from "./components/navbar.js";

 
const App = () => {
 return (
    <BrowserRouter>
   <div>
     <Navbar />
     <Routes>
     </Routes>
   </div>
   </BrowserRouter>
 );
};
 
export default App;