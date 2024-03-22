export default class NotificationDeniedPage {

    render() {
        const btn = window.document.createElement("p")
        btn.textContent = "Notification is denied by browser settings"
        window.document.body.appendChild(btn)
    }

}
