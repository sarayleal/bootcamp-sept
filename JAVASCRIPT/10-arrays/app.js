//! .at      nos devuelve la posicion de un valor dentro de un array.
const array1 = [1,5,7,9,12];
const index1 = 4;
console.log(array1.at(index1));


const arrayexample = ["saray", "asier", "india", "david"];
const index2 = 2;
console.log(arrayexample.at(index2));



//! .concat (CONCATENA)   nos devuelve un array concatenado, de dos o varios arrays
const arrayConcat1 = [1,2,3];
const arrayConcat2 = ['Saray', 'David', 'India'];
const arrayConcat3 = arrayConcat1.concat(arrayConcat2);
const arrayConcat4 = [{a:'Tyson', b: 'Michi'}];
const arrayConcatSpread = [...arrayConcat1, ...arrayConcat2, ...arrayConcat4];
console.log(arrayConcat3);
console.log(arrayConcatSpread);



const arrayConcatOther1 = ['a', 'b','c'];
const arrayConcatOther2 = ['d', 'e', 'f'];
const arrayConcatOther3 =[...arrayConcatOther1, ...arrayConcatOther2];
console.log(arrayConcatOther3);


//! .entries (RECORRE TODAS LAS ENTRADAS DE UN ARRAY)
const arrayEntries =[1, 2, 3, 'saray', 'hola mundo'];
const iteratorEntries = arrayEntries.entries()
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);



//! .fill (RELLENA) || primer param (valor a añadir) || segundo param (posicion donde empieza) || tercer paarm ( posicion donde termina);

const arrayFill  = ['saray', 'asier', 'david', ''];
console.log(arrayFill.fill('india',3,4));

const family = ['pili', 'cecilia'];
console.log(family.fill('david',0,1));


//! .flat (CONVIERTE UN ARRAY DE ARRAYS EN UN UNICO ARRAY);
const arrayFlat = [0,1,[2,3],[4,5]];
console.log(arrayFlat.flat());




    
  
























