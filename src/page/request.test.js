import { screen } from "@testing-library/dom";
import { afterEach, describe, expect, test } from "vitest";
import RequestPermissionPage from "./request";


describe("알림권한 dafault시 권한을 요청할 수 있는 페이지 테스트", () => {

    afterEach(() => {
        document.body.innerHTML = ""
    })

    test("request permission 버튼이 보여야함", () => {
        new RequestPermissionPage().render()

        const button = screen.getByRole("button")
        expect(button).toHaveTextContent(/Allow Notification/ig)
    })

})