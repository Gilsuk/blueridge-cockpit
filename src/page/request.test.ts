import { screen } from "@testing-library/dom";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import RequestPermissionPage from "./request";
import Permission from "../permission";


describe("알림권한 dafault시 권한을 요청할 수 있는 페이지 테스트", () => {

    beforeEach(() => {
        vi.stubGlobal('location', {
            reload: vi.fn()
        })
    })

    afterEach(() => {
        vi.unstubAllGlobals()
        document.body.innerHTML = ""
    })

    test("request permission 버튼이 보여야함", () => {
        new RequestPermissionPage(new Permission()).render()

        expect(screen.getByRole("button")).toHaveTextContent(/Allow Notification/ig)
    })

    test("버튼 클릭시 권한 요청함수를 호출해야함", () => {
        const permission = new Permission();
        const page = new RequestPermissionPage(permission)
        const mockReq = vi.spyOn(page, "requestAndReload").mockResolvedValue()
        page.render()

        screen.getByRole("button").click()

        expect(mockReq).toHaveBeenCalledOnce()
    })

    test("권한 요청은 Permission 객체에 위임", () => {
        const permission = new Permission();
        const mockPermReq = vi.spyOn(permission, "request").mockResolvedValue("default")
        const page = new RequestPermissionPage(permission)
        page.render()

        screen.getByRole("button").click()

        expect(mockPermReq).toHaveBeenCalledOnce()
    })

    test("requestAndReload 테스트, 권한 요청후 페이지 새로고침", async () => {
        const permission = new Permission();
        const mockReq = vi.spyOn(permission, "request").mockResolvedValue("default")
        vi.stubGlobal('location', {
            reload: vi.fn()
        })

        await new RequestPermissionPage(permission).requestAndReload()

        expect(mockReq).toHaveBeenCalledOnce()
        expect(location.reload).toHaveBeenCalledOnce()
    })

})