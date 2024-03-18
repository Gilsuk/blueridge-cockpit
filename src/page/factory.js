import NotificationDeniedPage from "./denied";

export default class PageFactory {
    getPage() {
        return new NotificationDeniedPage();
    }
}