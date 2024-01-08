import { getAllByRole } from "@testing-library/dom";
import "@testing-library/jest-dom/vitest";
import { JSDOM } from "jsdom";
import { expect, test } from "vitest";

test('DOM test snippet', async () => {
    const dom = new JSDOM({})
    const btn = dom.window.document.createElement('button')
    dom.window.document.body.appendChild(btn)
    expect(getAllByRole(dom.window.document.body, 'button')).toHaveLength(1)
})
