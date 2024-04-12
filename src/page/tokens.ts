import FCM from "../fcm"
import Page from "./page"

export default class TokensPage implements Page {

    private readonly fcm

    constructor(fcm: typeof FCM) {
        this.fcm = fcm
    }

    async render() {
        const p = window.document.createElement("p")
        const token = await this.fcm.getToken()
        p.textContent = `FCM Token: ${token}`
        window.document.body.appendChild(p)
    }

}