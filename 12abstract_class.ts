abstract class Hewan12 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makan(): void {
        console.log(`${this.name} sedang makan`);
    }

    abstract bergerak(): void;
}

class Kucing12 extends Hewan12 {
    constructor() {
        super('kucing');
    }

    bergerak(): void {
        console.log("kucing berjalan");
    }
}

class Burung12 extends Hewan12 {
    constructor() {
        super('Burung');
    }

    bergerak(): void {
        console.log("Burung terbang");
    }
}

const kucing = new Kucing12();
kucing.bergerak();
kucing.makan();

const burung = new Burung12();
burung.bergerak();
burung.makan();