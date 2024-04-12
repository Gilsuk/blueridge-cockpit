import { FirebaseApp, initializeApp } from "firebase/app";
import { Messaging, getMessaging, getToken } from "firebase/messaging";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { mock } from "vitest-mock-extended";
import FCM from "./fcm";

/**
 * 테스트환경에서 FCM API 실행이 불가능함
 */
describe("firebase SDK wrapper test", () => {
    vi.mock("firebase/app")
    vi.mock("firebase/messaging")

    beforeEach(async () => {
        vi.stubGlobal('navigator', {
            serviceWorker: {
                getRegistration: vi.fn().mockResolvedValue({})
            }
        })
        vi.mocked(initializeApp).mockReturnValue(mock<FirebaseApp>())
        vi.mocked(getMessaging).mockReturnValue(mock<Messaging>())
    })

    afterEach(() => {
        vi.unstubAllGlobals()
    })

    test("getToken이 token을 담은 promise를 반환해야함", async () => {
        vi.mocked(getToken).mockResolvedValue("MOCKED_TOKEN")

        const token = await FCM.getToken()

        expect(token).toBeTruthy()
    })

    test("FCM should be singleton", async () => {
        const fcm1 = FCM;
        const fcm2 = FCM;

        await fcm1.getToken() // 호출해야 필드가 초기화됨
        await fcm2.getToken()

        expect(fcm1).toStrictEqual(fcm2)
    })

})