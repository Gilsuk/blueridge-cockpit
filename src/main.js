import requestPermission from './permission/index.js'

try {
  requestPermission()
} catch (e) {
  console.error(e)
}
