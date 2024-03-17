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
    
    // expect(new Intl.DateTimeFormat("ko-KR", {
    //     dateStyle: "full",
    //     timeStyle: "full",
    //     timeZone: "Asia/Seoul",
    // }).format(createdAt)).toBe("sdf")
})