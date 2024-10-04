class Product {
    #name;
    #cost;
    #acceptingOrders;
    #quantity;
    #description;
    #discount = 0;
    static #tax = 12;  
    constructor(name, cost, acceptingOrders, quantity, description){
        this.#name = name;
        this.#cost = Number(cost);
        this.#acceptingOrders = acceptingOrders;
        this.#quantity = Number(quantity);
        this.#description = description;
    };
    #computeTax(){
        return (Product.#tax / 100) * this.#cost;
    }
    set setDiscount(x){
        this.#discount = x;
    }
    get stockCost(){
        let stockCost = (this.#computeTax() + this.#cost) * this.#quantity;
        let discAmt = (this.#discount / 100) * stockCost;
        return this.#discount !== 0 ? stockCost - discAmt : stockCost;
    }
    get getName(){
        return this.#name;
    }
    get getCost(){
        return this.#cost;
    }
    get getQuantity(){
        return this.#quantity;
    }
    get getAccept(){
        return this.#acceptingOrders;
    }
    get getDesc(){
        return this.#description;
    }
};

export default Product;