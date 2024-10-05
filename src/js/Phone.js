import Product from "./Product";
import { descriptionSymbol } from "./protectedKeys";

class Phone extends Product{
    #os;
    #ram;
    #storage;
    #color;
    #type ='Phone';
    constructor(name, cost, acceptingOrders, quantity, description, os, ram, storage, color){
        super(name, cost, acceptingOrders, quantity, description);
        this.#os = os;
        this.#ram = ram;
        this.#storage = storage;
        this.#color = color
    }
    get getType(){
        return this.#type;
    }
    get getDescription(){
        return `
        Description: ${this[descriptionSymbol]}
        OS: ${this.#os}
        RAM: ${this.#ram} GB
        Storage: ${this.#storage} GB
        Color: ${this.#color}`;
    }
}

export default Phone;