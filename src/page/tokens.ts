import FCM from "../fcm"

export default class TokensPage {

    #fcm

    constructor(fcm: FCM) {
        this.#fcm = fcm
    }

    async render() {
        const p = window.document.createElement("p")
        const token = await this.#fcm.getToken()
        p.textContent = `FCM Token: ${token}`
        window.document.body.appendChild(p)
    }

}