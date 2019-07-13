'user strict';

class SymbolPase {
    constructor() {

    }
    p(str) {
        document.write(`<p>${str}</p>`);
    }
    h2(str) {
        document.write(`<h2>${str}</h2>`);
    }
    h4(str) {
        document.write(`<h4>${str}</h4>`);
    }
    protect_obj() {
        this.h2('Symbol');
        this.h4('对象保护');
        let obj = {
            name: 'Anna',
        }
        let age = Symbol();
        obj[age] = 18;
        console.log(obj);
        for(let index in obj) {
            this.p(obj[index])
        }
    }

    create_key() {
        this.h4('构建对象key');
        let key = Symbol();
        let obj = {
            [key]: 'Anna',
        }
        console.log(obj);   //{Symbol(): "Anna"}
        key = 'age';
        obj[key] = 18;
        console.log(obj);   //{age: 18, Symbol(): "Anna"}
    }
}

let sp = new SymbolPase;
//sp.create_key();
