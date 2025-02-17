const button = document.querySelector('#button')
const disclaimer = document.querySelector('#disclaimer')
const onClick = function() {
    disclaimer.innerHTML = "Pastries are not vegan."
}
button.addEventListener('click', onClick)