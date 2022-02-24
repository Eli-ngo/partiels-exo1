let sessions = document.querySelectorAll('.sessions');
let popup = document.getElementById('#popup__container');

window.addEventListener('load', () => {
    sessions.forEach((session) => {
        session.addEventListener('click', () => {
            popup.classList.toggle("show");
            popup.classList.toggle("hidden");
        })
    })
})