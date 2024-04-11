import '../styles/main.css'
import sw from './service-worker?worker&url'
import { PageFactory } from './page'
import Permission from './permission'
import Router from './router'

navigator.serviceWorker.register(sw, {
    type: import.meta.env.PROD ? 'classic' : 'module'
}).then(() => {
    const permission = new Permission()
    const router = new Router();
    new PageFactory(permission, router).getPage().render()
})
