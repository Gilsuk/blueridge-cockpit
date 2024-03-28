import '../styles/main.css'
import { PageFactory } from './page'
import Permission from './permission'
import Router from './router'

const permission = new Permission()
const router = new Router();
new PageFactory(permission, router).getPage().render()
