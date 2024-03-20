import { expect, test } from "vitest";

test('테스트 환경이 DOM인지 확인', () => {
    expect(window).not.toBeUndefined();
})
