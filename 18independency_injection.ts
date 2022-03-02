class Store {
    private name: string = "Store A";
    private profit: number = 1000;

    getName(): string {
        return this.name;
    }

    getProfit(): number {
        return this.profit;
    }
}

class FashionProduct {
    private store: Store;
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;

        this.store = new Store();
    }

    sell(): void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

class TechProduct {
    private store: Store;
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;

        this.store = new Store();
    }

    sell(): void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

const baju = new FashionProduct("baju lengan panjang", 20000);
baju.sell();

// -------------------------------------
// ------------- DINAMIS ---------------
// -------------------------------------

interface IStore {
    name: string;
    profit: number;
    getProfit(): number;
}

class TokoLama implements IStore {
    name: string = "Toko Lama";
    profit: number = 1000;

    getName(): string {
        return this.name;
    }

    getProfit(): number {
        return this.profit;
    }
}

class TokoBaru implements IStore {
    name: string = "Toko Baru";
    profit: number = 2500;

    getName(): string {
        return this.name;
    }

    getProfit(): number {
        return this.profit;
    }
}

class HijabProduct {
    private store: IStore;
    private name: string;
    private price: number;

    constructor(store: IStore, name: string, price: number) {
        this.name = name;
        this.price = price;
        this.store = store;
    }

    sell(): void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}
class FoodProduct {
    private store: IStore;
    private name: string;
    private price: number;

    constructor(store: IStore, name: string, price: number) {
        this.name = name;
        this.price = price;
        this.store = store;
    }

    sell(): void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

const tokolama = new TokoLama();
const tokobaru = new TokoBaru();

const bajuBagus = new HijabProduct(tokolama, "Baju Lama", 20000);
const bajuBagus2 = new HijabProduct(tokobaru, "Baju Baru", 20000);
bajuBagus.sell();
bajuBagus2.sell();