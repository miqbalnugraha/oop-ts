interface Generics3<T> {
    propA: T,
    methodA(): T
};

class GenericsClass<T> implements Generics3<T> {
    propA: T;

    constructor(prop: T) {
        this.propA = prop;
    }

    methodA(): T {
        return this.propA;
    }    
}

const genericsClassA = new GenericsClass(1233);
console.log(genericsClassA.methodA());