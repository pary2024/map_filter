// const names = [
//     'Sophea', 
//     'Rithy', 
//     'Sovan', 
//     'Chenda', 
//     'Dara', 
//     'Chanthou', 
//     'Sokun', 
//     'Borey', 
//     'Pisey', 
//     'Rathana', 
//     'Sovann', 
//     'Sokha', 
//     'Vuthy', 
//     'Sreyneang', 
//     'Monorom', 
//     'Chhun', 
//     'Sothea', 
//     'Samnang', 
//     'Sokhom', 
//     'Vireak'
// ];

// const FilterName = (name)=>{
//     return name.includes("S");
// }

// const NewName = names.filter(FilterName);

// console.log(NewName);


const arrs = [1,2,3,4,5,6,7,8,9,10];
const even = arrs.filter(e=>e%2==1)
console.log(even);
const odd = (arr)=>{
    if (arr%2==0) return arr;
    
}
const OddNumber = arrs.filter(odd);

console.log(OddNumber);