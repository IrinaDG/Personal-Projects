const btn = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Hey!',
    'Hello!',
    'Good day!',
    'Hey there!'
]

const types = [
    'info',
    'success',
    'error',
    'warning'
]

btn.addEventListener('click', () => createNotification())

function createNotification(messages = null, type = null) {
    const n = document.createElement('div')
    n.classList.add('toast')
    n.classList.add(type ? type : getRandomType())
    n.innerText = getRandomMessage()
    
    toasts.appendChild(n)

    setTimeout(() => {
        n.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}