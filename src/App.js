import { Landingpage } from "./components/Landingpage";
import Login from "./components/Login";
import { Registro } from "./components/Registro";
import React from "react";
import Sidebar from "./components/Sidebar";

function App () {
  return (
    <div className="h-screen bg-black"> 
    <div className="h-[90%] flex">
        <Sidebar/>


    </div>
    <div/>

        <Login/>
        <Registro/>
    </div>
  );
}

export default App;