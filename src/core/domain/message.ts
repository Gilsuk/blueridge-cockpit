class Message {

    static #LOCAL_TIME_ZONE = Intl.DateTimeFormat().resolvedOptions().timeZone

    #id
    #title
    #content
    #createdAt

    /**
     * 
     * @param {number} id 
     * @param {string} title 
     * @param {string} content 
     * @param {string} createdDateTime ISO 8601
     */
    constructor(id: number, title: string, content: string, createdDateTime: string) {
        this.#id = id
        this.#title = title
        this.#content = content
        this.#createdAt = Date.parse(createdDateTime)
    }

    get id() {
        return this.#id
    }
    get title() {
        return this.#title
    }
    get content() {
        return this.#content
    }
    get createdAt() {
        return this.#createdAt
    }

    getCreatedDateTime(timezone: string) {
        return new Intl.DateTimeFormat("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            hourCycle: "h23",
            minute: "2-digit",
            second: "2-digit",
            weekday: "short",

            timeZone: timezone ? timezone : Message.#LOCAL_TIME_ZONE,
        }).format(this.#createdAt)
    }

}

export default Message
