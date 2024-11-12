// const object = {
//     "id":1,
//     "name":"pary",
//     "product": 12.4,
//     "color":["red","blue"]
// }
// console.table(object);


// console.log(object.id);
// console.log(object.name);
// console.log(object.product);
// object.color.forEach(e=>console.log(e));


const people = [
    {
      name: "Sokly",
      age: 28,
      gender: "Male",
      email: "sokly@example.com"
    },
    {
      name: "Chanta",
      age: 32,
      gender: "Female",
      email: "chanta@example.com"
    },
    {
      name: "Sovanna",
      age: 24,
      gender: "Male",
      email: "sovanna@example.com"
    },
    {
      name: "Borey",
      age: 30,
      gender: "Male",
      email: "borey@example.com"
    },
    {
      name: "Vichea",
      age: 26,
      gender: "Male",
      email: "vichea@example.com"
    },
    {
      name: "Sophea",
      age: 29,
      gender: "Female",
      email: "sophea@example.com"
    },
    {
      name: "Mengsreng",
      age: 35,
      gender: "Male",
      email: "mengsreng@example.com"
    },
    {
      name: "Rathana",
      age: 31,
      gender: "Female",
      email: "rathana@example.com"
    },
    {
      name: "Kunthea",
      age: 22,
      gender: "Female",
      email: "kunthea@example.com"
    },
    {
      name: "Visal",
      age: 27,
      gender: "Male",
      email: "visal@example.com"
    }
  ];

const FirstName= (people)=> people.name.includes("S");
const NewName= people.filter(FirstName);
console.log(NewName);




// const NewName= people.filter((people)=> people.name.includes("S"));
// console.log(NewName);