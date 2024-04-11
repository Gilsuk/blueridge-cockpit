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
    const data = event.data.json()
    const notification = data.notification

    const title = notification.title
    const options = {
        body: notification.body,
        icon: notification.image
    }

    self.registration.showNotification(title, options)
})
