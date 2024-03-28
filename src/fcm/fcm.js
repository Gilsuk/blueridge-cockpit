import { initializeApp } from "firebase/app"
import { getMessaging, getToken } from "firebase/messaging"


export default class FCM {
    #app
    #messaging

    constructor() {
        this.#app = initializeApp({
            apiKey: import.meta.env.VITE_FIREBASE_apiKey,
            authDomain: import.meta.env.VITE_FIREBASE_authDomain,
            projectId: import.meta.env.VITE_FIREBASE_projectId,
            storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
            messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
            appId: import.meta.env.VITE_FIREBASE_appId,
        })

        this.#messaging = getMessaging(this.#app)
    }

    getToken() {
        return getToken(this.#messaging, {
            vapidKey: import.meta.env.VITE_FIREBASE_vapidKey,
        })
    }
}
