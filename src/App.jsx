import { useState } from "react";
import "@arcgis/core/assets/esri/themes/light/main.css";
import { MainMap } from "./components/Map/map";
import Header from "./components/Layout/header/Header"

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <MainMap visible={true} />
    </div>
  )
}

export default App;
