import "@testing-library/jest-dom/vitest";
import PermissionStatusEmitter from "./PermissionStatusEmitter";
import { test, expect } from "vitest";

test('permission emiiter의 초기값은 Default를 제공', async () => {
    const permEmitter = new PermissionStatusEmitter()

    const result = await new Promise((resolve) => {
        permEmitter.subscribe({
            next(x) {
                resolve(x)
            }
        })
    })

    expect(result).toBe(permEmitter.DEFAULT)
})
