import Permission from "../permission"

export default class RequestPermissionPage {

    #permission

    /**
     * 
     * @param {Permission} permission 
     */
    constructor(permission) {
        if (!(permission instanceof Permission)) throw new Error("Argument is missing")
        this.#permission = permission
    }

    render() {
        const btn = window.document.createElement("button")
        btn.textContent = "Allow Notification"

        btn.addEventListener("click", () => {
            this.#permission.request()
        })

        window.document.body.appendChild(btn)
    }

}
