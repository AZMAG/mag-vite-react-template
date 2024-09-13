import React from "react"
import { observer } from "mobx-react-lite"
import { useDataStore } from "../../../stores/DataContext"
import LinearProgress from "@mui/material/LinearProgress"

function SuccessModal() {
  const store = useDataStore()

  return (
    <>
      {store.successModalShow ? (
        <>
          <div
            tabIndex="-1"
            className="fixed text-black inset-0 z-50 flex h-[calc(100%-1rem)] overflow-y-auto overflow-x-hidden bg-slate-500/75 outline-none focus:outline-none md:inset-0 md:h-full">
            <div className="relative w-2/5 my-6 mx-auto">
              <div className="overflow-y-auto p-6 container text-slate-700 text-sm font-normal">
                {store.submitting ? (
                  <div className="bg-blue-100 border-l-8 border-blue-500 text-blue-700 p-8 rounded-lg">
                    <h2 className="bold text-xl pb-4 mb-4 w-full">
                      Submitting Comment...
                    </h2>
                    <LinearProgress />
                  </div>
                ) : (
                  <div className="bg-green-100 border-l-8 border-green-500 text-green-700 p-8 rounded-lg">
                    <button
                      className="absolute top-8 right-8 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                      onClick={() => {
                        store.setSuccessModalShow(false)
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

                    <div className="w-12 h-12 rounded-full bg-green-50 p-2 flex items-center justify-center mx-auto mb-3.5">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col items-center">
                      <h2 className="text-xl font-semibold">Comment submitted</h2>
                      <p>
                        Thank you, we have received your feedback and it is now being processed.
                      </p>
                      <button
                        type="button"
                        className="py-2 px-3 text-sm mt-4 font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        onClick={() => {
                          store.setSuccessModalShow(false)
                        }}>
                        Continue
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}
export default observer(SuccessModal)
