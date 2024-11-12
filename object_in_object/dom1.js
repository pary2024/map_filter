


// let box = document.getElementById("box");

// box.innerHTML    // insert element in html
// box.innerText     //insert text in html

// const box = document.querySelector('.box');
// const sidebars = document.querySelector('.sidebars');


// document.addEventListener('click', (e) => {
//     let x = e.clientX;
//     if (x > 400) {
//         sidebars.style.width = '0px';
//     }
// });

// box.addEventListener('çlick', () => {
//     sidebars.style.width = '400px';
// });


const box = document.querySelector('.box');
const sidebars = document.querySelector('.sidebars');

document.addEventListener('click', (e) => {
    let x = e.clientX;
    if (x > 400) {
        sidebars.style.width = '0px';
    }
});

box.addEventListener('click', () => {
    sidebars.style.width = '400px';
});


