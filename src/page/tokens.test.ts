import { screen } from "@testing-library/dom";
import { afterEach, describe, test, vi } from "vitest";
import FCM from "../fcm";
import TokensPage from "./tokens";


describe("Tokens Page 테스트", () => {

    afterEach(() => {
        document.body.innerHTML = ""
    })

    test("FCM 토큰정보 화면에 표시", async () => {
        const MOCKED_TOKEN = "MockedTokenValue"
        const fcm = new FCM()
        vi.spyOn(fcm, "getToken").mockResolvedValue(MOCKED_TOKEN)
        const page = new TokensPage(fcm)

        await page.render()

        screen.getByText(MOCKED_TOKEN, {
            exact: false
        })
    })
})