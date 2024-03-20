export default class RequestPermissionPage {

    render() {
        const btn = window.document.createElement("button")
        btn.textContent = "Allow Notification"

        window.document.body.appendChild(btn)
    }

}
