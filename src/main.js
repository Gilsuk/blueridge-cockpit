import '../styles/main.css'
import { PageFactory } from './page'
import Permission from './permission'

const permission = new Permission()
new PageFactory(permission).getPage().render()
