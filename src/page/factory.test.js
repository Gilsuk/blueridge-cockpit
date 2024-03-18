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
import { expect } from "vitest";
import { test } from "vitest";
import PageFactory from "./factory";
import NotificationDeniedPage from "./denied";

test("알림 권한이 denied일 때, denied page가 나와야함", () => {

    const pageFactory = new PageFactory()
    const page = pageFactory.getPage()
    expect(page).toBeInstanceOf(NotificationDeniedPage)

})
