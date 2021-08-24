//1.Let and Const
const hubby = 'Omor Sani'; //no reassign allowed
let phone = 'iphone 10';

//2.Template String
const myNotes = `I am Mojnu of ${hubby}. I have a ${phone}.`
console.log(myNotes);

//3.default parameter
//spread or three dots...
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber()
console.log(biggest);

//4.Arrow Function
const square = x => x * x;
console.log(square(8));