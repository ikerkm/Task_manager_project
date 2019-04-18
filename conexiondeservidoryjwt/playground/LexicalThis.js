// function Persona () { 
//     this.edad = 0;
//     // let self = this;

//     console.log(this.edad)
//     // setInterval(function crece() {
//     //     this.edad ++;
//     //     console.log(this.edad)
//     // }.bind(this), 1000);

//     setInterval(() => {
//         this.edad ++;
//         console.log(this.edad)
//     }, 1000);
// }

// const Ivan  = new Persona();

class Clase2 {
    constructor(fn) {
        this.edad = 500;


        fn.bind(this);
        console.log(fn());
    }
}

class Prueba {
    constructor() { 
        this.edad = 0;

        this.getEdad = function () {
            return this.edad;
        }.bind(this);

        this.getEdadArrow = () => {
            return this.edad;
        }
    }
}

const prueba = new Prueba();

// new Clase2(prueba.getEdadArrow);
new Clase2(prueba.getEdad);
// console.log(prueba.getEdad())
// console.log(prueba.getEdadArrow())