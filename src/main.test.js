import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/vitest";
import { beforeEach, expect, test } from "vitest";

test('테스트 환경이 DOM인지 확인', () => {
    expect(window).not.toBeUndefined();
})

beforeEach(() => {
    // window = new Window({})
})

test('DOM test snippet', () => {
    const btn = window.document.createElement('button')
    window.document.body.appendChild(btn)
    expect(screen.getAllByRole('button')).toHaveLength(1)
})
