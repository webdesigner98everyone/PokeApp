import "./styles.css";
import React from "react";
//Importamos nuestro navbar creado
import Navbar from "../componentes/navbar";

export default function App() {
  return (
    <div>
      {/* LLamamos nuestra navbar por medio de nuestra etiqueta*/}
      <Navbar />
      <div className="App">
        <h1>Hello</h1>
        <h2>Edit to see some magic happen!</h2>
      </div>
    </div>
  );
}
