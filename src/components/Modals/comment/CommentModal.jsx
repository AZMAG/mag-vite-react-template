import React from "react"
import { observer } from "mobx-react-lite"
import { useDataStore } from "../../../stores/DataContext"
import US60Logo from "../../../assets/images/US60-sm.webp"
import CommentForm from "../../CommentForm/commentForm"
import ContactForm from "../../CommentForm/contactForm"
import { IoLocationOutline } from "react-icons/io5"

function CommentModal() {
  const store = useDataStore()

  return (
    <>
      {store.commentModalShow ? (
        <>
          <div
            tabIndex="-1"
            aria-hidden="true"
            className="fixed text-black inset-0 z-50 flex h-[calc(100%-1rem)] overflow-y-auto overflow-x-hidden bg-slate-500/75 outline-none focus:outline-none md:inset-0 md:h-full">
            <div className="relative w-2/5 my-6 mx-auto">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between rounded-t border-b p-4 bg-slate-900">
                  <div className="flex flex-row items-center justify-center space-x-4">
                    <img className="w-12" src={US60Logo} alt="MAG's Logo" />
                    <h3 className="text-xl font-semibold text-slate-50">US60 - Grand Ave Comments</h3>
                  </div>

                  <button
                    className="text-slate-300 ml-auto inline-flex items-center rounded-lg p-2 text-sm hover:text-slate-50"
                    onClick={() =>  {
                      store.setCommentModalShow(false)
                      store.resetCommentForm()
                    }}>
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
                  <CommentForm />
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}
export default observer(CommentModal)
