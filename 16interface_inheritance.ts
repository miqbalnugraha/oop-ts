interface Vehicle {
    name: string;
    wheels: number;
}

interface ICar extends Vehicle {
    doors: number;
}

class Civic implements ICar {
    doors: number = 4;
    name: string = "Civic";
    wheels: number = 4;
    
}