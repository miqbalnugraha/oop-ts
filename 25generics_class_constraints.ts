interface Product {
    sell(): void;
}

class CarProduct implements Product {
    sell(): void {
        console.log("Jual Mobil");
    }
}

class MotorProduct implements Product {
    sell(): void {
        console.log("Jual Motor");
    }
}

function SellProducts<T extends Product>(products: T[]): void {
    products.forEach(product => product.sell());
}

const car = new CarProduct();
const motor = new MotorProduct();

SellProducts([car, motor]);