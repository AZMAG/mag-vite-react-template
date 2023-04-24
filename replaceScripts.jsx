import replace from "replace-in-file"
import { version, date, created, copyright } from "./package.json"

// const replace = require("replace-in-file")
// const pkg = require("./package.json")

// README
const reVersion = new RegExp("(### version | )([0-9]+)(?:.([0-9]+))(?:.([0-9]+))")
const newVersion = " " + version

const reUpdate = new RegExp("(Updated | )([0-9]{4}-[0-9]{2}-[0-9]{2})")
const newUpdate = " " + date

const reCreated = new RegExp("(Created | )([0-9]{4}-[0-9]{2}-[0-9]{2})")
const newCreated = " " + created

const reCopyRightDate = new RegExp("(Copyright )([0-9]{4})")
const newCopyRightDate = "Copyright " + copyright

const readme = {
  files: "./README.md",
  from: [reVersion, reUpdate, reCreated, reCopyRightDate],
  to: [newVersion, newUpdate, newCreated, newCopyRightDate],
}

// LICENCE
const reCopyDate = new RegExp("(Copyright \\(c\\) )([0-9]{4})")
const newCopyDate = "Copyright (c) " + copyright

const license = {
  files: ["./LICENSE", "./public/LICENSE"],
  from: [reCopyDate],
  to: [newCopyDate],
}

// Humans.txt
const reVersionHumans = new RegExp("(Version: )([0-9]+)(?:.([0-9]+))(?:.([0-9]+))")
const newVersionHumans = "Version: " + version
const reUpdateHumans = new RegExp("(Last updated: )([0-9]{4}-[0-9]{2}-[0-9]{2})")
const newUpdateHumans = "Last updated: " + date
const reCreatedHumans = new RegExp("(Creation date: )([0-9]{4}-[0-9]{2}-[0-9]{2})")
const newCreatedHumans = "Creation date: " + created

const humans = {
  files: "./public/humans.txt",
  from: [reVersionHumans, reUpdateHumans, reCreatedHumans],
  to: [newVersionHumans, newUpdateHumans, newCreatedHumans],
}

// manifiest.json

// index.html
const reIndexVersion = new RegExp(
  '(<meta name="version" content=")([0-9]+)(?:.([0-9]+))(?:.([0-9]+))(" \\/>)',
)
const newIndexVersion = '<meta name="version" content="' + version + '" />'

const reIndexDate = new RegExp(
  '(<meta name="revision-date" content=")[0-9]{4}-[0-9]{2}-[0-9]{2}(" \\/>)',
)
const newIndexDate = '<meta name="revision-date" content="' + date + '" />'

const timeStamp = new Date().toISOString()
// .replace(/[^0-9]/g, "")
// .slice(0, -3)
const timeStampBuild = timeStamp.replace(/[^0-9]/g, "").slice(0, -3)

const reIndexBuild = new RegExp(
  '(<meta name="build-info" content=")([0-9]+)(?:.([0-9]+))(?:.([0-9]+))(?:.)(\\d{14})(" \\/>)',
)
const newIndexBuild = '<meta name="build-info" content="' + version + "." + timeStampBuild + '" />'

const reModified = new RegExp(
  '(<meta property="article:modified_time" content=")(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2}(?:\\.\\d*)?)((-(\\d{2}):(\\d{2})|Z)?)(" \\/>)',
)
const newModified = '<meta property="article:modified_time" content="' + timeStamp + '" />'

const index = {
  files: "./index.html",
  from: [reIndexVersion, reIndexDate, reIndexBuild, reModified],
  to: [newIndexVersion, newIndexDate, newIndexBuild, newModified],
}

// DocConfig.js
const reVersionConfig = new RegExp('(version: ")(v[0-9]+)(?:.([0-9]+))(?:.([0-9]+))(")')
const newVersionConfig = 'version: "v' + version + '"'

const reDateConfig = new RegExp('(date: ")([0-9]{4}-[0-9]{2}-[0-9]{2})(")')
const newDateConfig = 'date: "' + date + '"'

const reCopyrightConfig = new RegExp('(copyright: ")([0-9]{4})(")')
const newCopyrightConfig = 'copyright: "' + copyright + '"'

const docConfig = {
  files: "./src/config/DocConfig.js",
  from: [reVersionConfig, reDateConfig, reCopyrightConfig],
  to: [newVersionConfig, newDateConfig, newCopyrightConfig],
}

;(async () => {
  try {
    const readmeResults = await replace(readme)
    const licenseResults = await replace(license)
    const humansResults = await replace(humans)
    const indexResults = await replace(index)
    const docConfigResults = await replace(docConfig)
    const results = { readmeResults, licenseResults, humansResults, indexResults, docConfigResults }
    console.log("Replacement results:", results)
  } catch (error) {
    console.error("Error occurred:", error)
  }
})()

// DOCUMENTATION
// https://www.emgoto.com/nodejs-write-file/
