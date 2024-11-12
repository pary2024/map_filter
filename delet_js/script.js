const box = document.querySelector('.box');
const show =()=>{
    if (box.classList.contains('remove')) box.classList.remove('remove');
    else box.classList.add('remove');
    // box.classList.add('remove');    
}
box.addEventListener('click',  show)



const btn = document.querySelector('.btnRemove');

btn.addEventListener('click', ()=>{
    const removeElement = document.querySelector('.remove');
    removeElement.remove();
    //remove thsi is remove an element 
} )