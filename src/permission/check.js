class Permission {
    hasBeenGranted () {
        return Notification.permission === "granted"
    }
    hasBeenDenied () {
        return Notification.permission === "denied"
    }
}

export default Permission