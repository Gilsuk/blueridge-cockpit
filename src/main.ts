import '../styles/main.css'
import { SERVICE_WORKER_URL } from './service-worker'
import { PageFactory } from './page'
import Permission from './permission'
import Router from './router'

navigator.serviceWorker.register(SERVICE_WORKER_URL, {
    type: import.meta.env.PROD ? 'classic' : 'module',
    scope: '/',
}).then(() => {
    const permission = new Permission()
    const router = new Router();
    new PageFactory(permission, router).getPage().render()
})
