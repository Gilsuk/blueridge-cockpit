import FCM from "../fcm"

export default class TokensPage {

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