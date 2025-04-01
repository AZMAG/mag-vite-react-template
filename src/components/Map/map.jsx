import React, { useRef, useEffect, useContext } from "react"
import esriConfig from "@arcgis/core/config"
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"

import ZoomWidget from "../Widgets/zoomWidget"
import HomeWidget from "../Widgets/homeWidget"
import LocateWidget from "../Widgets/locateWidget"
import BasemapToggleWidget from "../Widgets/basemapToggleWidget"
import { AuthContext } from "../Verification/AuthContext"
import DocConfig from "../../config/DocConfig"
// const ESRI_apiKEY = import.meta.env.VITE_esri_apiKey

let map
let view

function MainMap() {
  const mapDiv = useRef(null)
  const { user, logout } = useContext(AuthContext);

  function callWidgets() {
    ZoomWidget(view)
    HomeWidget(view)
    LocateWidget(view)
    BasemapToggleWidget(view)
  }

  useEffect(() => {
    if (mapDiv.current) {
      // basemap info
      // https://developers.arcgis.com/rest/basemap-styles/#reference

      // esriConfig.apiKey = ESRI_apiKEY
      esriConfig.apiKey = DocConfig.esri_apiKey
      const esriMap = new Map({
        basemap: "gray-vector",
      })

      view = new MapView({
        map: esriMap,
        container: mapDiv.current,
        center: [-110.817, 34.1385],
        zoom: 6,
        constraints: {
          rotationEnabled: false,
          minZoom: 6,
          maxZoom: 20,
        },
        ui: {
          components: [],
        },
        popup: {
          dockEnabled: false,
          visibleElements: { collapseButton: false },
          dockOptions: {
            buttonEnabled: false,
            breakpoint: false,
          },
        },
      })
    }

    view.when(async () => {
      try {
        await callWidgets()
      } catch (error) {
        console.error("Error during initialization:", error)
      }
    })
  }, [])

  return(
    
    <div id="map" className="h-full w-full m-auto" ref={mapDiv}>
      <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to the Main Map</h1>
      <p className="mt-2">Logged in as: {user.username}</p>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded mt-4"
        onClick={logout}
      >
        Logout
      </button>
    </div>
    </div>
  )
}

function getMapRef() {
  return { map, view }
}

function displayMessage(info) {
  console.log(info)
}

export { getMapRef, MainMap }
