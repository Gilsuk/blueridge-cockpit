import { expect, test } from "vitest";
import DefaultPage from "./default";
import NotificationDeniedPage from "./denied";
import RequestPermissionPage from "./request";
import Permission from "../permission";
import TokensPage from "./tokens";

test.skip("all pages should implement render", () => {

    const pages = [
        new DefaultPage(),
        new NotificationDeniedPage(),
        new RequestPermissionPage(new Permission()),
        new TokensPage(),
    ]

    pages.forEach(page => {
        expect(page.render).toBeTypeOf("function")
    })

})