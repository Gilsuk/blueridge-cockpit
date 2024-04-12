import Permission from "../permission"

export default class RequestPermissionPage {

    private readonly permission

    constructor(permission: Permission) {
        this.permission = permission
    }

    render() {
        const btn = window.document.createElement("button")
        btn.textContent = "Allow Notification"

        btn.addEventListener("click", () => { this.requestAndReload() })

        window.document.body.appendChild(btn)
    }

    async requestAndReload() {
        return this.permission.request().then(() => {
            location.reload();
        })
    }

}
