// interface hanya bisa memakai object
type Phone = string;
type PC = number;
type UserType = {
    name: string;
}

interface UserInterface {
    name: string;
}

class User1 implements UserType {
    name: string = 'user 1';
}

// -----------------------
// interface bisa di-merge
// -----------------------
interface Dinosaurus {
    name: string;
}
interface Dinosaurus {
    weight: number;
}

// -----------------------
// type tidak bisa di-merge tapi bisa di-intersect
// -----------------------
type Name = {
    name: string
}
type Age = {
    age: number
}

type Employee1 = Name & Age;
type Employee2 = Name | Age;

const employee1: Employee1 = {
    name: 'asdasd',
    age: 20
}
const employee2: Employee2 = {
    name: 'asdasd'
}

// ------------------------------------------------
// interface dapat meng-implements dan meng-extends
// sebuah class dengan mudah
// ------------------------------------------------

// bagaimana menentukan kapan harus menggunakan type atau interface?
// ------------------------------------------------
// pakailah interface jika ingin membuat sebuah object atau method baru dari sebuah object
// jadi kalau ingin buat object dari class itu cocoknya pakai interface
// class implements interface
// ------------------------------------------------
// pakailah type jika ingin membuat sebuah variabel atau function
// let asdasdj: type
// funcion getData(): type
