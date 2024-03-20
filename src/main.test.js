import "@testing-library/jest-dom/vitest";
import { JSDOM } from "jsdom";
import { afterEach, expect, test, vi } from "vitest";

afterEach(() => { document.body.innerHTML = '' })

test('테스트 환경이 DOM인지 확인', () => {
    expect(window).not.toBeUndefined();
})

test('JSDOM이 자동으로 load 이벤트를 발생시키는지 확인', async () => {
    const dom = new JSDOM({})
    const mock = vi.fn()

    await new Promise((resolve) => {
        dom.window.addEventListener('DOMContentLoaded', () => {
            mock()
            resolve()
        })
    })

    expect(mock).toBeCalledTimes(1)
})
