import { afterEach, describe, expect, test, vi } from "vitest";
import Router from "./router";


describe("Router class 테스트 with global `location`", () => {
    afterEach(() => {
        vi.unstubAllGlobals()
    })

    test("로케이션이 /tokens 일 때 isAtTokens should return true", () => {

        vi.stubGlobal('location', {
            pathname: "/tokens",
        })

        const router = new Router()
        expect(router.isAtTokens()).toBeTruthy()

    })

    test("로케이션이 /tokens가 아닐 때 isAtTokens should return false", () => {

        vi.stubGlobal('location', {
            pathname: "/",
        })

        const router = new Router()
        expect(router.isAtTokens()).toBeFalsy()

    })

})
