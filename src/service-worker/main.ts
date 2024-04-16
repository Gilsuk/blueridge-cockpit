declare let self: ServiceWorkerGlobalScope

export default function () {

    self.addEventListener("install", (event: ExtendableEvent) => {
        event.waitUntil(self.skipWaiting());
        console.log("sw install event: ", event)
    })

    self.addEventListener("activate", (event: ExtendableEvent) => {
        event.waitUntil(self.clients.claim());
        console.log("sw activate event: ", event)
    })

    self.addEventListener("fetch", (event: FetchEvent) => {
        event.respondWith(fetch(event.request))
    })

    self.addEventListener("push", (event: PushEvent) => {
        // const data = event.data?.json()
        // const notification = data.notification

        // const title = notification.title
        // const options = {
        //     body: notification.body,
        //     icon: notification.image
        // }

        // const result = self.registration.showNotification(title, options)
        const result = self.registration.showNotification("Hi event", {
            body: "This is contents",
        })
        event.waitUntil(result)
    })

    self.addEventListener("message", (event: ExtendableMessageEvent) => {
        console.log("sw message evet: ", event)
    })

    self.addEventListener("notificationclick", (event: NotificationEvent) => {
        event.notification.close()
    })

}