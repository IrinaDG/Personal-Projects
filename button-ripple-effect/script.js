const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function(e) {

//It shows where are you clicking in the viewport        
        const x = e.clientX
        const y = e.clientY

//The position of the button
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

//Calculates where are you clicking in the button
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)

    })
})