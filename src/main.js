import Permission from './permission/index.js'
import {addButton} from './render/index.js'

const permission = new Permission()
if (permission.hasBeenGranted()) {
//   renderNotificationList()
//   .then(readyForReceiving)
//   .catch(renderErrorPage)
} else if (permission.hasBeenDenied()) {
//   renderErrorPage()
} else { // default
  addButton(document.querySelector('#message'))
//   renderRequestButton()
//   .then(addClickEvent())
}
