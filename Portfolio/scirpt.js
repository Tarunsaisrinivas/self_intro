
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;
  cursorOutline.style.left = `${posX}px`;
  cursorOutline.style.top = `${posY}px`;
});



// GOOGLE FORM
const scriptURL = 'https://script.google.com/macros/s/AKfycbz19TtqitBHB5BeZxgnigBnUj7QWMo10CW3xi_pcGMhAekf6sPx0sODEpV8ekmMzH1LjQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = alert("Message Sent Successfully ")
            setTimeout(function () {
                msg.innerHTML = ""
            }, 1000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})