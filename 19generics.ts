function getData (value: any) {
    return value;
}

const data1 = getData("string");
console.log(data1);

// ------ GENERIC ------

function getData2<T>(value: T) {
    return value;
}
// number
const data2 = getData2(123);
console.log(data2.toFixed(1));
// string
const data3 = getData2("weasad");
console.log(data3.charAt(1));