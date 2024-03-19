// eslint-disable-next-line no-unused-vars
import Permission from "../permission";
import DefaultPage from "./default";
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
        else if (this.#permission.hasBeenGranted())
            return new DefaultPage()
        else
            return new RequestPermissionPage()
    }
}