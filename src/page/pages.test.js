import { expect, test } from "vitest";
import DefaultPage from "./default";
import NotificationDeniedPage from "./denied";
import RequestPermissionPage from "./request";

test("all pages should implement render", () => {

    const pages = [
        new DefaultPage(),
        new NotificationDeniedPage(),
        new RequestPermissionPage(),
    ]

    pages.forEach(page => {
        expect(page.render).toBeTypeOf("function")
    })

})