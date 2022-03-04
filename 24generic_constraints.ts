// function Generics24<T>(arg: T): T {
//     // console.log(arg.length);
//     return arg;
// }

interface Length {
    length: number;
}

function Generics24<T extends Length>(arg: T): T {
    console.log(arg.length);
    return arg;
}

const generics24 = Generics24("Nugraha");
console.log(generics24);

// jika ingin masukin number

// error
// const generics24a = Generics24(12312);

const generics24a = Generics24({length: 20, value: 10});