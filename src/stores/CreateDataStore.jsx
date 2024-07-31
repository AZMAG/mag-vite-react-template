import { makeAutoObservable } from "mobx"

export function createDataStore() {
  return makeAutoObservable({
    view: null,
    setView(view) {
      this.view = view
    },

    map: null,
    setMap(map) {
      this.map = map
    },

    /*
     * Layers
     */

    /*
     * Modals
     */
    aboutModalShow: true,
    setAboutModalShow(val) {
      this.aboutModalShow = val
    },

    successModalShow: false,
    setSuccessModalShow(val) {
      this.successModalShow = val
    },

    errorModalShow: false,
    setErrorModalShow(val) {
      this.errorModalShow = val
    },
  })
}
