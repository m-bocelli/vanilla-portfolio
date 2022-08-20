let nameElement = document.querySelector('.name');
let buttonElement = document.querySelector('.landing-button');

/* Splash screen is animated when the page fully loads */
window.addEventListener('DOMContentLoaded', ()=>{
    let delayTime = 200;

    setTimeout(()=>{
        /* Name is brought onto screen first */
        nameElement.classList.add('active');
        setTimeout(()=>{
            buttonElement.classList.add('active');
        }, delayTime)
    }, delayTime);
});