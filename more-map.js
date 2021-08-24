const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const flengths = friends.map(friend => friend.length);
// console.log(flengths);

const products = [
    { name: 'water bottle', price: 50, cololr: 'yellow' },
    { name: 'mobile phone', price: 1500, cololr: 'black' },
    { name: 'smart watch', price: 3000, cololr: 'golden' },
    { name: 'sticky note', price: 30, cololr: 'pink' },
    { name: 'water flask', price: 3, cololr: 'white' },
]
const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
//console log product:
// products.map(product => console.log(product));
products.forEach(product => console.log(product));
// console.log(productPrices);