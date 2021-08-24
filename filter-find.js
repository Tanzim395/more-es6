const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(smallNumbers);

const products = [
    { name: 'water bottle', price: 50, cololr: 'yellow' },
    { name: 'mobile phone', price: 1500, cololr: 'black' },
    { name: 'smart watch', price: 3000, cololr: 'golden' },
    { name: 'sticky note', price: 30, cololr: 'pink' },
    { name: 'water flask', price: 3, cololr: 'white' },
];

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const pinks = products.filter(product => product.cololr == 'pink');
// console.log(pinks);

const whiteItem = products.find(product => product.cololr == 'white');
console.log(whiteItem);