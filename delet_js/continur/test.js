const box = document.querySelectorAll('.box');

box.forEach(e =>{
    e.addEventListener('click' , () => {
        if (e.classList.contains('remove')) e.classList.remove('remove');
        else e.classList.add('remove');
    })
})

const btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{
    const delclass = document.querySelectorAll('.remove');
    // delclass.forEach(e =>{
    //     e.style.transition = 'opacity 0.5s';
    //     e.style.opacity = '0'; 
    //     setTimeout(() => e.remove(),1000)
    // })
     delclass.forEach(e => e.remove());
})