//rest operator use change jenh pi array


const fruit = ["Banana","Dragon fruit","durien","APple","wood Fruit"];

//the same attend by index in array
// const [apple, ...more]=fruit
// console.log(apple);
// console.log(more);


const [...more]=fruit;

more[0]="Hello";

console.log(fruit);