class PermissionStatusEmitter {

    constructor() {
        this.DEFAULT = "default"
    }

    subscribe(observer) {
        observer.next(this.DEFAULT)
    }
}

export default PermissionStatusEmitter;