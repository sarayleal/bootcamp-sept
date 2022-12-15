const target = {a:1, b:2};
const source = {b:3, c:4};

Object.assign(target, source);

console.log('target', target);
console.log('soource', source);




const person = {name:'Saray', age:40};
const person2 = {name:'David', age:36};

Object.assign(person, person2);

console.log('person', person);
console.log('person2', person2);




const places = {place: 'Suances', number: 60};
const places2 = { place:'Cortiguera', number: 60};
Object.assign(places, places2);
console.log('places', places);
