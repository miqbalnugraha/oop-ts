class Hewan3 {
    nama: string;
    kaki: number;

    constructor(nama: string, kaki: number) {
        this.nama = nama;
        this.kaki = kaki;
    }
}

const kucing2 = new Hewan3("Persia", 4);
console.log(kucing2);

//------------------

class Hewan41 {
    constructor(public nama: string, public kaki: number){}
}
const kucing21 = new Hewan3("Anggora", 4);
console.log(kucing21);