import { screen } from "@testing-library/dom"
import { afterEach, describe, test } from "vitest"
import NotificationDeniedPage from "./denied"

describe("알림권한 dafault시 권한을 요청할 수 있는 페이지 테스트", () => {

    afterEach(() => {
        document.body.innerHTML = ""
    })

    test("알림 권한이 denied 되었다는 메세지 출력", () => {
        new NotificationDeniedPage().render()

        screen.getByText(/Notification is Denied/i)
    })

})