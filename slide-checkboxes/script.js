const toggles = document.querySelectorAll('.toggle')
const thin = document.querySelector('#thin')
const crispy = document.querySelector("#crispy");
const fluffy = document.querySelector("#fluffy");

toggles.forEach(toggle => toggle.addEventListener('change', (e) => {
    animate(e.target)
}))

function animate(theClickedOne) {
    if (thin.checked && crispy.checked && fluffy.checked) {
        if (thin === theClickedOne) {
            fluffy.checked = false
        }

        if (crispy === theClickedOne) {
            fluffy.checked = false
        }

        if (fluffy === theClickedOne) {
            crispy.checked = false
        }
    }
}