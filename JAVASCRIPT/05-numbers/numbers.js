function divider(a, b) {
    if (Number.isInteger(a / b)) {
      return 'si'
    }
    return 'no'
};
console.log(divider(10, 4));



function divider2(a, b) {
    if (Number.isInteger(a / b)) {
        return 'Hola Saray'
    }
};
console.log(divider2(10/2));



function multiply(s, d) {
    if(Number.isInteger(s * d)) {
        return 'si'
    }
};
console.log(multiply(20, 4));



function circunference(r) {
    if(Number.isNaN(Number.parseFloat(r))) {
        return 0
     } else {
        return parseFloat(r) *2.0 * Math.PI
     }
}
console.log(circunference('4,567ujyhtbfn'));







