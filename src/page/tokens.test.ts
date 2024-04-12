import { screen } from "@testing-library/dom";
import { afterEach, describe, test, vi } from "vitest";
import FCM from "../fcm";
import TokensPage from "./tokens";


describe("Tokens Page 테스트", () => {
    vi.mock("../fcm")

    afterEach(() => {
        document.body.innerHTML = ""
    })

    test("FCM 토큰정보 화면에 표시", async () => {
        const MOCKED_TOKEN = "MockedTokenValue"
        vi.mocked(FCM.getToken).mockResolvedValue(MOCKED_TOKEN)
        const page = new TokensPage(FCM)

        await page.render()

        screen.getByText(MOCKED_TOKEN, {
            exact: false
        })
    })
})