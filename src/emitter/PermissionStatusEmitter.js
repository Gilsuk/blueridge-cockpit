import Permission from "../permission";

class PermissionStatusEmitter {

    subscribe(observer) {
        observer.next(Permission.DEFAULT);
    }
}

export default PermissionStatusEmitter;