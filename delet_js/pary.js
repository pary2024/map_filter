const porduct = [
    {
        id : 1,
        name:'regular Trouser',
        iamge: 'https://zandokh.com/image/catalog/products/2024-10/2122409762/Wide-Leg-Trousers%20(1).jpg',
        price: 23,
        category: 'men'

    },
    {
        id : 2,
        name:'regular Trouser',
        iamge: 'https://zandokh.com/image/catalog/products/2024-10/1122407310/Regular%20Shorts%20(11).jpg',
        price: 23,
        category: 'men'
    },
    {
        id : 3,
        name:'regular Trouser',
        iamge: 'https://zandokh.com/image/catalog/products/2024-10/2122410896/Regular%20Poloshirt%20(1).jpg',
        price: 23,
        category: 'men'
    },  
    {
        id : 4,
        name:'regular Trouser',
        iamge: 'https://zandokh.com/image/catalog/products/2024-10/2212408008/Oversized%20T-shirt%20(1).jpg',
        price: 23,
        category: 'women'
    },
    {
        id : 5,
        name:'regular Trouser',
        iamge: 'https://zandokh.com/image/catalog/products/2024-10/2222409904/Loose%20fit%20shirt%20(6).jpg',
        price: 23,
        category: 'women'
    },
    {
        id : 6,
        name:'regular Trouser',
        iamge: 'https://zandokh.com/image/catalog/products/2024-10/1222406399/Oversized-T-shirts%20(5).jpg',
        price: 23,
        category: 'women'
    }

]

const categories = ["men","women"]

const root = document.getElementById('root');

porduct.forEach(pro => {
    root.innerHTML += `
    <div class="box">
            <figure>
                <img src="${pro.iamge}" alt="">
            </figure>
            <h2>${pro.name}</h2>
            <p>${pro.price}</p>
        </div>
        `;

        console.log(root);
})

const filter = (index) => {
    const filterData = porduct.filter((e) =>{
       return e.category == categories[index].toLowerCase();
    })
    let data = '';
    filterData.forEach(pro =>{
         data += `<div class="box">
            <figure>
                <img src="${pro.iamge}" alt="">
            </figure>
            <h2>${pro.name}</h2>
            <p>${pro.price}</p>
        </div>`;
    })
    root.innerHTML = data;



}
const menu = document.getElementById('menu');

categories.forEach((element ) =>{
    const li = document.createElement('li');
    li.setAttribute('onclick',`filter(${categories.indexOf(element)})`);
    const category = document.createTextNode(element);

    li.appendChild(category);
    menu.appendChild(li);
})