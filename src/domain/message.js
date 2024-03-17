class Message {
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
    constructor(id, title, content, createdDateTime) {
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

}

export default Message
