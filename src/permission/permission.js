class Permission {

    static DEFAULT = "default"
    static GRANTED = "granted"
    static DENIED = "denied"

    hasBeenGranted () {
        return Notification.permission === Permission.GRANTED
    }
    hasBeenDenied () {
        return Notification.permission === Permission.DENIED
    }
}

export default Permission