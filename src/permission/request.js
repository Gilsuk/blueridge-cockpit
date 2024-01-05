export function requestPermission() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('premission granted')
            return
        }
        console.error('premission rejected')
    })
}