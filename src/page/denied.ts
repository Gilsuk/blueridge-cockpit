import Page from "./page"

export default class NotificationDeniedPage implements Page {
    render() {
        const btn = window.document.createElement("p")
        btn.textContent = "Notification is denied by browser settings"
        window.document.body.appendChild(btn)
    }
}
