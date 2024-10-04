class Product {
    constructor(name, cost, acceptingOrders, quantity, description){
        this.name = name;
        this.cost = Number(cost);
        this.acceptingOrders = acceptingOrders;
        this.quantity = Number(quantity);
        this.description = description;
    };
    static tax = 12;
    discount = 0;
    set setDiscount(x){
        this.discount = x;
    }
    get stockCost(){
        let stockCost = ((Product.tax / 100) * this.cost + this.cost) * this.quantity;
        let discAmt = (this.discount / 100) * stockCost;
        return this.discount !== 0 ? stockCost - discAmt : stockCost;
    }

};

export default Product;