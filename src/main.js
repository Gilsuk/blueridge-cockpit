import Permission from './permission/index.js'

const permission = new Permission()
if (permission.hasBeenGranted()) {
//   renderNotificationList()
//   .then(readyForReceiving)
//   .catch(renderErrorPage)
} else if (permission.hasBeenDenied()) {
//   renderErrorPage()
} else { // default
//   renderRequestButton()
//   .then(addClickEvent())
}
