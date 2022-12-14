const myUser = {name :'Saray', age:40};
console.log(myUser);
console.log(JSON.stringify(myUser));


const myBoyFriend = {name:'David',age:36};
console.log(JSON.stringify(myBoyFriend));


const myHome = {adress:'Calle la Aldea', number:60}
console.log(myHome);
console.log(JSON.stringify(myHome));



const json = '{"name":"saray", "age": 40}';
const obj = JSON.parse(json);
console.log(obj);


