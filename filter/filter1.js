
const Age = [12,13,14,15,16,17,28,30,40,50,60];
let votes=[];
const canVot = (Age)=>{
    if (Age>18) votes.push(Age);
}

Age.forEach(canVot);
console.log(votes);