import FCM from "../fcm";
import Permission from "../permission";
import Router from "../router";
import DefaultPage from "./default";
import NotificationDeniedPage from "./denied";
import RequestPermissionPage from "./request";
import TokensPage from "./tokens";

export default class PageFactory {

    #permission
    #router

    constructor(permission: Permission, router: Router) {
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