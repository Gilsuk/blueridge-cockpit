/** TODO
 * 1. 알림권한 확인
 * 1-1. denied시 denied 페이지
 * 1-2. default시 권한 요청 알림 페이지
 * 1-3. granted시 2로
 *
 * 2. 로그인 확인
 * 2-1. 미 인증시 로그인 페이지
 * 2-2. 인증시 알림목록 페이지
 * 
 * *로그인 상태
 * 1. 토큰 없음 hasLoggedIn()
 * 2. 토큰 만료 -> 알림목록 페이지
 * 3. 토큰 갱신실패 (네트워크) -> 알림목록 페이지
 * 4. 토큰 갱신실패 (broken token) -> 알림목록 페이지
 * 5. 정상 -> 알림목록 페이지
 */
import { expect, test, vi } from "vitest";
import Permission from "../permission";
import NotificationDeniedPage from "./denied";
import PageFactory from "./factory";
import RequestPermissionPage from "./request";

test("알림 권한이 denied일 때, denied page가 나와야함", () => {

    const permission = new Permission()
    vi.spyOn(permission, "hasBeenDenied").mockImplementation(() => true)
    vi.spyOn(permission, "hasBeenGranted").mockImplementation(() => false)

    const pageFactory = new PageFactory(permission)
    const page = pageFactory.getPage()

    expect(page).toBeInstanceOf(NotificationDeniedPage)

})

test("알림 권한이 default일 때, request permission page가 나와야함", () => {

    const permission = new Permission()
    vi.spyOn(permission, "hasBeenDenied").mockImplementation(() => false)
    vi.spyOn(permission, "hasBeenGranted").mockImplementation(() => false)

    const pageFactory = new PageFactory(permission)
    const page = pageFactory.getPage()

    expect(page).toBeInstanceOf(RequestPermissionPage)

})

test("알림 권한이 granted일 때 권한관련 페이지가 나오면 안됨", () => {

    const permission = new Permission()
    vi.spyOn(permission, "hasBeenDenied").mockImplementation(() => false)
    vi.spyOn(permission, "hasBeenGranted").mockImplementation(() => true)

    const pageFactory = new PageFactory(permission)
    const page = pageFactory.getPage()

    expect(page).not.toBeInstanceOf(NotificationDeniedPage)
    expect(page).not.toBeInstanceOf(RequestPermissionPage)

})
