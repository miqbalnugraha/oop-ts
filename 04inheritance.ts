class Hewan5 {
    nama: string = "";
    kaki: number =0;

    bernafas(){
        console.log("bernafas...");
    }
}

class Burung5 extends Hewan5 {
    warna: string = "merah";
}

const burung5 = new Burung5();
burung5.nama = "kenari";
burung5.kaki = 2;
console.log(burung5);
burung5.bernafas();