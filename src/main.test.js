import { getAllByRole } from "@testing-library/dom";
import "@testing-library/jest-dom/vitest";
import { JSDOM } from "jsdom";
import { expect, test } from "vitest";

test('테스트 환경이 DOM인지 확인', () => {
    expect(window).not.toBeUndefined();
})

test('DOM test snippet', () => {
    const dom = new JSDOM({})
    const btn = dom.window.document.createElement('button')
    dom.window.document.body.appendChild(btn)
    expect(getAllByRole(dom.window.document.body, 'button')).toHaveLength(1)
})
