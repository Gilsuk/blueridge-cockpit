import { expect, test } from "vitest";
import Message from "./message";

test("도메인 모델 private fields 게터 확인", () => {
    const message = new Message(1, "제목", "내용", "2024-03-17T14:43:00Z")

    const id = message.id
    const title = message.title
    const content = message.content
    const createdAt = message.createdAt

    expect(id).toBe(1)
    expect(title).toBe("제목")
    expect(content).toBe("내용")
    expect(createdAt).toBe(Date.UTC(2024, 2, 17, 14, 43))
})

test("메세지 시간 출력 string 포맷 검증", () => {
    const message = new Message(1, "제목", "내용", "2024-03-17T15:43:00Z")

    expect(message.getCreatedDateTime("Asia/Seoul")).toBe("2024. 03. 18. (월) 00:43:00")
})
