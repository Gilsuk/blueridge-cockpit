import { FirebaseApp, initializeApp } from "firebase/app"
import { Messaging, getMessaging, getToken } from "firebase/messaging"
import sw from '../service-worker?worker&url'


class FCM {
    #app!: FirebaseApp
    #messaging!: Messaging

    #getFirebaseApp() {
        this.#app = initializeApp({
            apiKey: import.meta.env.VITE_FIREBASE_apiKey,
            authDomain: import.meta.env.VITE_FIREBASE_authDomain,
            projectId: import.meta.env.VITE_FIREBASE_projectId,
            storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
            messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
            appId: import.meta.env.VITE_FIREBASE_appId,
        })
        return this.#app
    }

    #getMessaging() {
        if (this.#messaging !== undefined) return this.#messaging
        this.#messaging = getMessaging(this.#getFirebaseApp())
        return this.#messaging
    }

    getToken() {
        return navigator.serviceWorker.getRegistration(sw).then((registration) => {
            return getToken(this.#getMessaging(), {
                vapidKey: import.meta.env.VITE_FIREBASE_vapidKey,
                serviceWorkerRegistration: registration,
            })
        })
    }
}

const instance = new FCM()
Object.freeze(instance)

export default instance