interface Generics<T> {
    propA: T;
}

function genericFunction<T>(value:T): Generics<T> {
    let data: Generics<T> = {
        propA: value
    };
    return data;
}

const sgenerics = genericFunction("ini string generic");
console.log(sgenerics);
const bgenerics = genericFunction(true);
console.log(bgenerics);
const ngenerics = genericFunction(121319);
console.log(ngenerics);
