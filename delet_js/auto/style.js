

production = [
    {
        id :1,
        name :"pary",
        Image :'',
        gender:'male'
    },
    
    {
        id :2,
        name :"dara",
        Image :'',
        gender:'male'
    },
    {
        id :3,
        name :"sok",
        Image :'',
        gender:'male'
    },

]

const categories = ["men","women","boy","girls","child","children"];

const menu = document.querySelector('.menu');
categories.forEach((element) =>{
    const li = document.createElement('li');
    const category = document.createTextNode(element);

    li.appendChild(category);
    menu.appendChild(li);
})

