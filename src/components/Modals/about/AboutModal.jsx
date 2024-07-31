import React from "react"
import { observer } from "mobx-react-lite"
import { useDataStore } from "../../../stores/DataContext"
import Footer from "../../Layout/footer/Footer"
import MagLogo from "../../../assets/images/MAG-logo-color-horizontal.webp"

function AboutModal() {
  const store = useDataStore()

  return (
    <>
      <button
        title="About"
        className="font-bold text-slate-50 hover:bg-slate-300 hover:text-slate-800 py-2 px-4 rounded"
        onClick={() => {
          store.setAboutModalShow(true)
        }}>
        About
      </button>
      {store.aboutModalShow ? (
        <>
          <div
            tabIndex="-1"
            className="fixed text-black inset-0 z-50 flex h-[calc(100%-1rem)] overflow-y-auto overflow-x-hidden bg-slate-500/75 outline-none focus:outline-none md:inset-0 md:h-full">
            <div className="relative w-1/3 my-6 mx-auto">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between rounded-t border-b p-4 bg-slate-900">
                  <h3 className="text-xl font-semibold text-slate-50">About</h3>
                  <button
                    className="text-slate-300 ml-auto inline-flex items-center rounded-lg p-2 text-sm hover:text-slate-50"
                    onClick={() => store.setAboutModalShow(false)}>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>

                <div className="overflow-y-auto p-6 container text-slate-700 text-sm font-normal">
                  <div className="flex flex-row justify-center items-center mx-auto mb-8 space-x-6">
                    <img className="w-64" src={MagLogo} alt="MAG's Logo" />
                  </div>

                  <h1 className="text-lg font-semibold mb-4">
                    US 60 (Grand Avenue): Loop 303 to SR 74 Corridor Study – Interactive Comment Map
                  </h1>
                  <p className="text-left mb-3">
                    A tool for receiving feedback about the US 60 - Grand Ave Study area.
                  </p>
                  <p className="text-left mb-3">
                    Share your knowledge and preferences for the US 60 - Grand Ave. Your input will
                    help local and regional planners better understand your experiences by allowing
                    you to pinpoint locations and corridors and provide feedback.
                  </p>
                  <p className="text-left mb-3">
                    For more information, please visit:{" "}
                    <a
                      href="https://azmag.gov/US60CorridorStudy"
                      className="font-bold text-magTeal hover:underline hover:text-magDark cursor-pointer">
                      US 60 Corridor Study Page
                    </a>
                  </p>
                  <div className="text-left mb-3">
                    <span className="font-semibold">To use the map:</span>
                    <ol className="list-disc list-outside mt-3 ml-5">
                      <li>Click on the "Provide a Comment" button.</li>
                      <li>
                        Navigate the map cursor to the location on the map you want to comment on
                        (note: you may zoom in and out and navigate around the screen using the maps
                        controls)
                      </li>
                      <li>Click to add your point to the map</li>
                      <li>Fill out the required fields</li>
                      <li>Click the "Submit Comment" button</li>
                    </ol>
                  </div>
                  <div className="flex flex-col mt-4">
                    <p className="italic font-sm ">For more information, please contact</p>
                    <a
                      href="mailto:bwilliams@azmag.gov"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-magTeal hover:underline hover:text-magDark cursor-pointer">
                      Bradlee Williams
                    </a>
                    <button
                      className="mt-4 bg-slate-100 border border-slate-200 hover:bg-slate-300 text-slate-900 font-bold py-2 px-4 rounded"
                      onClick={() => store.setAboutModalShow(false)}>
                      Continue
                    </button>
                  </div>

                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}
export default observer(AboutModal)
