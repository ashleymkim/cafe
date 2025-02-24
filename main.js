const button = document.querySelector('#button')
const disclaimer = document.querySelector('#disclaimer')
const onClick = function() {
    disclaimer.innerHTML = "Pastries are not vegan."
}
button.addEventListener('click', onClick)

const anotherButton = document.getElementById('another-button');
    const message = document.getElementById('message');

    anotherButton.addEventListener('click', function() {
        message.style.display = 'block'; // Show the message
    })