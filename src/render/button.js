function addButton(element) {
    const btn = document.createElement('button')
    btn.textContent = 'request permission'
    element.appendChild(btn)
}

export default addButton