import Permission from "./permission"

export function requestPermission() {
    Notification.requestPermission().then((permission) => {
        if (permission === Permission.GRANTED) {
            console.log('premission granted')
            return
        }
        console.error('premission rejected')
    })
}