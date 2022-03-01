class Ayam {
    static kaki: number = 2;
    static jalan() {
        console.log(`ayam berjalan dengan ${this.kaki} kaki`);
    }

    getKaki() {
        //console.log(this.kaki);
        console.log(Ayam.kaki);
    }
}

const ayam1 = new Ayam();
const ayam2 = new Ayam();
const ayam3 = new Ayam();
const ayam4 = new Ayam();
const ayam5 = new Ayam();
ayam1.getKaki();
ayam2.getKaki();
ayam3.getKaki();
ayam4.getKaki();
ayam5.getKaki();
Ayam.jalan();

// mengubah static properti 
Ayam.kaki = 4; 

ayam1.getKaki();
ayam2.getKaki();
ayam3.getKaki();
ayam4.getKaki();
ayam5.getKaki();
Ayam.jalan();
