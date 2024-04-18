declare let self: ServiceWorkerGlobalScope

export default {}

self.addEventListener("install", (event: ExtendableEvent) => {
    event.waitUntil(self.skipWaiting());
})

self.addEventListener("activate", (event: ExtendableEvent) => {
    event.waitUntil(self.clients.claim());
})

// self.addEventListener("fetch", (event: FetchEvent) => {
//     event.respondWith(fetch(event.request))
// })

self.addEventListener("push", (event: PushEvent) => {
    const data = event.data?.json()
    const notification = data.notification

    const title = notification.title

    const result = self.registration.showNotification(title, {
        body: notification.body,
        icon: notification.image || "/images/favicon192.png",
        badge: "/images/favicon192.png",
    })
    event.waitUntil(result)
})

self.addEventListener("notificationclick", (event: NotificationEvent) => {
    event.notification.close()
})
