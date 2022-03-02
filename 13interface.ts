interface AndroidPhone {
    name: string;
    menu(): void;
    home(): void;
    back(): void;
}

class Samsung implements AndroidPhone {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    menu(): void {
        console.log("samsung menu tapped");
    }
    home(): void {
        console.log("samsung home tapped");
    }
    back(): void {
        console.log("samsung back tapped");
    }    
}

class Asus implements AndroidPhone {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    menu(): void {
        console.log("Asus menu tapped");
    }
    home(): void {
        console.log("Asus home tapped");
    }
    back(): void {
        console.log("Asus back tapped");
    }
}

class GameA {
    private phone: AndroidPhone;

    constructor(phone: AndroidPhone) {
        this.phone = phone;
    }

    back() {
        console.log("kembali ke halaman utama game");
    }
    menu() {
        this.phone.menu();
    }
    home(){
        this.phone.home();
    }
}

const samsung = new Samsung("S20");

const game = new GameA(samsung);
game.home();
game.back();
game.menu();

interface ApplePhone {
    home(): void;
}

class Iphone implements ApplePhone {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    home(): void {
        console.log("Muncul global");
    }
}

const iphone = new Iphone("Iphone SE");
const game2 = new GameA(iphone); // tidak bisa dimasukan iphone karena gameA hanya untuk interface AndroidPhone