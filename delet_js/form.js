const username = document.getElementById('username');
const password = document.getElementById('password');

const submite = document.getElementById('submite')


// submite.onclick = ()=>{
//     const user = username.value;
//     const pass = password.value;


//     if (pass.length < 6){
//         password.classList.add('invalid');
//         alert('user error')
//     }


// }


password.onkeydown = ()=>{
    if (password.value.length<6) {
        password.classList.remove('valid');
        password.classList.add('invalid');
        
    }
    else{
        password.classList.remove('invalid');
        password.classList.add('valid');
    } 

}