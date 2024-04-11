import { afterEach, describe, expect, test, vi } from "vitest";
import Permission from "./permission";

describe("Notification 브라우저 API 테스트", () => {

    afterEach(() => {
        vi.unstubAllGlobals()
    })

    test("권한 허용 됐을 때, denied = false, greanted = true", () => {
        vi.stubGlobal('Notification', {
            permission: 'granted'
        })

        expect(new Permission().hasBeenGranted()).toBeTruthy()
        expect(new Permission().hasBeenDenied()).toBeFalsy()
    })

    test("권한 거부 됐을 때, denied = true, greanted = false", () => {
        vi.stubGlobal('Notification', {
            permission: 'denied'
        })

        expect(new Permission().hasBeenGranted()).toBeFalsy()
        expect(new Permission().hasBeenDenied()).toBeTruthy()
    })

    test("권한 default시, denied = false, greanted = false", () => {
        vi.stubGlobal('Notification', {
            permission: 'default'
        })

        expect(new Permission().hasBeenGranted()).toBeFalsy()
        expect(new Permission().hasBeenDenied()).toBeFalsy()
    })

    test("권한 요청시 브라우저 API 호출하는지 여부 테스트", () => {
        vi.stubGlobal('Notification', {
            requestPermission: vi.fn().mockResolvedValue({})
        })

        new Permission().request()

        expect(Notification.requestPermission).toHaveBeenCalledOnce()
    })

})