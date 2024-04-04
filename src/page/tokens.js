// eslint-disable-next-line no-unused-vars
import FCM from "../fcm"

export default class TokensPage {

    #fcm

    /**
     * 
     * @param {FCM} fcm 
     */
    constructor(fcm) {
        this.#fcm = fcm
    }

    async render() {
        const p = window.document.createElement("p")
        const token = await this.#fcm.getToken()
        p.textContent = `FCM Token: ${token}`
        window.document.body.appendChild(p)
    }

}