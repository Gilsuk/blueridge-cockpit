import { screen } from "@testing-library/dom";
import { afterEach, beforeEach, describe, test, vi } from "vitest";
import FCM from "../fcm";
import TokensPage from "./tokens";


describe("Tokens Page 테스트", () => {

    vi.mock("../fcm")
    const MOCKED_TOKEN = "MockedTokenValue"

    beforeEach(() => {
        FCM.mockImplementation(() => {
            return {
                getToken: vi.fn().mockResolvedValue(MOCKED_TOKEN)
            }
        })
    })

    afterEach(() => {
        document.body.innerHTML = ""
    })

    test("FCM 토큰정보 화면에 표시", async () => {
        const page = new TokensPage(new FCM())

        await page.render()

        screen.getByText(MOCKED_TOKEN, {
            exact: false
        })
    })
})