// pada dasarnya, kita tidak bisa memberi nama class atau object
// dengan nama yang sama dalam satu folder
// untuk mengakalinya kita bisa menggunakan NAMESPACE

namespace NamespaceExample {
    // class hewan sebenarnya sudah ada di file lain
    export class Hewan {

    }

    export const kodok = new Hewan();
}

const belalang = new NamespaceExample.Hewan();
let kodok2a = NamespaceExample.kodok;