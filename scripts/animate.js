let splash = document.querySelector('.splash');
let name = document.querySelector('h1');
let nameSpan = document.querySelectorAll('.name');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        //Take in each individual span element (Michael and Bocelli)
        nameSpan.forEach((span, i)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (i + 1) * 400)
        });

        setTimeout(()=>{
            nameSpan.forEach((span, i)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (i + 1) * 50)
            })
        }, 2000);

        setTimeout(()=>{
            splash.style.top = '-100vh';
        }, 2000)


    })
})