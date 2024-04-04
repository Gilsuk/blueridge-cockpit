self.addEventListener("install", (event) => {
    console.log("sw install event: ", event)
})

self.addEventListener("activate", (event) => {
    console.log("sw activate event: ", event)
})

self.addEventListener("fetch", (event) => {
    console.log("sw fetch event: ", event)
})

self.addEventListener("push", (event) => {
    console.log("sw push event: ", event)
})
