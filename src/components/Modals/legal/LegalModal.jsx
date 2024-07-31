import React, { useState } from "react"
import { FaBalanceScale } from "react-icons/fa";
import LegalText from "./LegalText"

export default function LegalDisclaimer() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <a type="button" onClick={setShowModal} rel="noreferrer">
        Legal Disclaimer
      </a>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center gap-x-2 rounded-t border-b border-solid border-slate-200 bg-slate-100 p-4">
                  <FaBalanceScale className="text-3xl text-magTeal" />
                  <h3 className="text-3xl font-semibold">Legal Disclaimer</h3>
                  <button
                    className="bg-white ml-auto inline-flex items-center rounded-lg p-2 text-sm hover:bg-slate-200 hover:text-slate-800"
                    onClick={() => setShowModal(false)}
                  >
                    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="relative max-h-[75vh] flex-auto overflow-y-scroll p-6">
                  <div className="container mx-auto text-left text-sm">
                    <LegalText />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex flex-col rounded-b border-t border-solid bg-slate-100 border-slate-400 p-3">
                  <button
                    className="flex justify-end px-6 py-2 text-sm font-bold uppercase outline-none text-magTeal hover:text-magDark hover:underline"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
