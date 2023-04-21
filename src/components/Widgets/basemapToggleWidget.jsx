// import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery"
import Basemap from "@arcgis/core/Basemap"
import Expand from "@arcgis/core/widgets/Expand"
import "./widgets.css"

function BasemapToggleWidget(view) {
  // const basemapToggle = new BasemapToggle({
  //   view,
  //   nextBasemap: "satellite",
  //   visibleElements: {
  //     title: true,
  //   },
  // });
  // view.ui.add(basemapToggle, "bottom-right");

  const basemaps = [
    Basemap.fromId("gray-vector"),
    Basemap.fromId("osm"),
    Basemap.fromId("satellite"),
  ]

  let basemapGallery = new BasemapGallery({
    view,
    source: basemaps,
  })

  const expand = new Expand({
    expandIconClass: "esri-icon-basemap",
    view: view,
    content: basemapGallery,
  })

  view.ui.add(expand, {
    position: "bottom-right",
  })
}

export default BasemapToggleWidget

// Widgets called in Map.js
