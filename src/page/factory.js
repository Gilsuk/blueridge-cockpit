import FCM from "../fcm";
// eslint-disable-next-line no-unused-vars
import Permission from "../permission";
// eslint-disable-next-line no-unused-vars
import Router from "../router";
import DefaultPage from "./default";
import NotificationDeniedPage from "./denied";
import RequestPermissionPage from "./request";
import TokensPage from "./tokens";

export default class PageFactory {

    #permission
    #router

    /**
     * 
     * @param {Permission} permission 
     * @param {Router} router 
     */
    constructor(permission, router) {
        this.#permission = permission
        this.#router = router
    }

    getPage() {
        if (this.#router.isAtTokens())
            return new TokensPage(new FCM())

        if (this.#permission.hasBeenDenied())
            return new NotificationDeniedPage()
        else if (this.#permission.hasBeenGranted())
            return new DefaultPage()
        else
            return new RequestPermissionPage(this.#permission)
    }
}