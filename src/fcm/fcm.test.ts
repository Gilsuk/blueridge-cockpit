import { initializeApp } from "firebase/app"
import { getMessaging, getToken } from "firebase/messaging"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import FCM from "./fcm";

/**
 * 테스트환경에서 FCM API 실행이 불가능함
 */
describe("firebase SDK wrapper test", () => {
    vi.mock("firebase/app")
    vi.mock("firebase/messaging")

    beforeEach(() => {
        vi.stubGlobal('navigator', {
            serviceWorker: {
                getRegistration: vi.fn().mockResolvedValue()
            }
        })
        initializeApp.mockReturnValue(new Object())
        getMessaging.mockReturnValue(new Object())
        getToken.mockResolvedValue("MOCKED_TOKEN")
    })

    afterEach(() => {
        vi.unstubAllGlobals()
    })

    test("getToken이 token을 담은 promise를 반환해야함", async () => {
        const fcm = new FCM();

        const token = await fcm.getToken()

        expect(token).toBeTruthy()
    })

})
