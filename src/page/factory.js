// eslint-disable-next-line no-unused-vars
import Permission from "../permission";
import NotificationDeniedPage from "./denied";
import RequestPermissionPage from "./request";

export default class PageFactory {

    #permission

    /**
     * 
     * @param {Permission} permission 
     */
    constructor(permission) {
        this.#permission = permission
    }

    getPage() {
        if (this.#permission.hasBeenDenied())
            return new NotificationDeniedPage()
        else
            return new RequestPermissionPage()
    }
}