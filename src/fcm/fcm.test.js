import { expect, test } from "vitest";
import FCM from "./fcm";

/**
 * 테스트환경에서 FCM API 실행이 불가능함
 */
test.skip("getToken이 token을 담은 promise를 반환해야함", async () => {
    const fcm = new FCM();

    const token = await fcm.getToken()

    expect(token).toBeTruthy()
})