const child = document.querySelectorAll('.child');

child.forEach((e)=>{
    e.addEventListener('click' , ()=>{

        if (e.classList.contains('remove')) e.classList.remove('remove');
        else e.classList.add('remove');
        // e.classList.add('remove');
    })
})


const btn = document.querySelector('.btn');

btn.addEventListener('click' , ()=>{
    const removeChild = document.querySelectorAll('.remove');
    // console.log(removeChild);
    removeChild.forEach(e => e.remove());
})