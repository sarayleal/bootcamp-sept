//El metodo .at, te devuelve el elemento en la posicion indicada.

const sentence = "Mi nombre es Saray Leal";

let index = 11;

console.log(`Voy a usar el index ${index} para que me devuelva el elemento que se encuentra en la posicion del ${sentence.at(index)}`);

console.log(`Voy a usar el index ${index} para que me devuelva el elemento que se encuentra en la posicion del ${sentence.at(index -3)}`);



const sentence1 = "Una frase para que?";

let index1 = 18;

console.log(`Voy a usar el index ${index1} para que me devuelva el elemento que se encuentra en esa posición  ${sentence1.at(index1)}`);
 
//Cuando a at, no le pasamos valor, por defecto es 0. si le pasamos -1, por ejemplo, será el ultimo elemento y así sucesivamente.
console.log(`Voy a no usar el index para que me devuelva la posicion por defecto  ${sentence1.at()}`);



