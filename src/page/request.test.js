import { screen } from "@testing-library/dom";
import { afterEach, describe, expect, test, vi } from "vitest";
import RequestPermissionPage from "./request";
import Permission from "../permission";


describe("알림권한 dafault시 권한을 요청할 수 있는 페이지 테스트", () => {

    afterEach(() => {
        document.body.innerHTML = ""
    })

    test("request permission 버튼이 보여야함", () => {
        new RequestPermissionPage().render()

        const button = screen.getByRole("button")
        expect(button).toHaveTextContent(/Allow Notification/ig)
    })

    test("버튼 클릭시 권한 요청을 수행해야함", () => {
        const permission = new Permission();
        const mockPerm = vi.spyOn(permission, "request").mockResolvedValue(Permission.DEFAULT)
        new RequestPermissionPage(permission).render()

        screen.getByRole("button").click()

        expect(mockPerm).toHaveBeenCalledOnce()
    })

})