const person = {
    isHuman : true,
    name : 'Antonio',
    printIntroduction: function () {
        console.log(`Hola soy ${this.name} y ${this.isHuman ? 'Soy humana' : 'No soy humana'}`)
    }
}

const Saray = Object.create(person)
Saray.isHuman = false;
Saray.name = 'Saray';
Saray.printIntroduction();


const person2 = {
    isStudent : true,
    name : 'Pepe',
    age : 30,
    printIntroduction2: function () {
        console.log(`Hola soy ${this.name} y tengo ${this.age} años y ${this.isStudent ? 'soy estudiante' : 'No soy estudiante'}`)
    }
}
console.log(person2.isStudent)

const David = Object.create(person2)
David.isStudent = false;
David.name = 'David';
David.age = 36;
David.printIntroduction2();


const María = Object.create(person2)
María.istudent = true;
María.name = 'María';
María.age = 32;
María.printIntroduction2();





