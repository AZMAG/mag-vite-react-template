import { useState } from "react"
import "@arcgis/core/assets/esri/themes/light/main.css"
import { DataProvider } from "./stores/DataContext"
import { MainMap } from "./components/Map/map"
import Header from "./components/Layout/header/Header"

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <DataProvider>
        <Header />
        <MainMap visible={true} />
      </DataProvider>
    </div>
  )
}

export default App
