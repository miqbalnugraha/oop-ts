interface Teacher {
    name: string;
    age: number;

    // optional
    phone?: string;
}

// propeprti optional tidak dipakai
let teacher: Teacher = {name: "Nugraha", age: 25};
console.log(teacher);

// properti optional dipakai
let teacher2: Teacher = {name: "Nugraha", age: 25, phone: "0895"};
console.log(teacher2);