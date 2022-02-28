// public: dapat digunakan pada kelas lainnya
// private: hanya dapat dipanggil oleh kelas itu sendiri
// protected: hanya dapat digunakan oleh kelas itu sendiri beserta kelas turunannya

class Hewan7 {
    public nama: string;
    private kaki: number;
    protected mamalia: boolean

    constructor(nama: string, kaki: number, mamalia: boolean) {
        this.nama = nama;
        this.kaki = kaki;
        this.mamalia = mamalia;
    }
}

class Katak7 extends Hewan7 {
    private umurTelur: number = 4;
    private umurKecebong: number = 7;
    private umurKatak: number = 90;

    getUmur() {
       this.umurTelur+this.umurKecebong+this.umurKatak;
    }
}

const katak7 = new Katak7("rainbow", 4, false);
console.log(katak7);
katak7.getUmur;