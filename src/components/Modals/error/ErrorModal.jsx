import React from "react"
import { observer } from "mobx-react-lite"
import { useDataStore } from "../../../stores/DataContext"
import LinearProgress from "@mui/material/LinearProgress"

function ErrorModal() {
  const store = useDataStore()
  if (!store.errorModalShow) return null

  return (
    <div
      tabIndex="-1"
      className="fixed text-black inset-0 z-50 flex h-[calc(100%-1rem)] overflow-y-auto overflow-x-hidden bg-slate-500/75 outline-none focus:outline-none md:inset-0 md:h-full">
      <div className="relative w-2/5 my-6 mx-auto">
        <div className="overflow-y-auto p-6 container text-slate-700 text-sm font-normal">
          <div className="bg-red-100 border-l-8 border-red-500 text-red-700 p-8 rounded-lg">
            <button
              className="absolute top-8 right-8 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={() => {
                store.setErrorModalShow(false)
              }}>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Close</title>
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </button>

            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-50">
              <svg
                className="h-6 w-6 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold">Submission Error</h2>
              <p>There was an error with your submission.  Please review and resubmit.</p>
              <button
                type="button"
                className="py-2 px-3 text-sm mt-4 font-medium text-center text-white rounded-lg bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
                onClick={() => {
                  store.setErrorModalShow(false)
                }}>
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(ErrorModal)
