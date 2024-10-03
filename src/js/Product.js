class Product {
    constructor(name, cost, acceptingOrders, quantity, description){
        this.name = name;
        this.cost = cost;
        this.acceptingOrders = acceptingOrders;
        this.quantity = quantity;
        this.description = description;
    };
    stockCost(){
        return this.cost * this.quantity;
    }
    viewDesc(){
        return this.description;
    }
    render(){
        const productCard = document.createElement('div');
        productCard.setAttribute('class','product');

        const nameDiv = document.createElement('div');
        nameDiv.setAttribute('class','name');
        nameDiv.innerText = this.name;

        const costDiv = document.createElement('div');
        costDiv.setAttribute('class','cost');
        costDiv.innerText = `$${this.cost}`;

        const quantityDiv = document.createElement('div');
        quantityDiv.setAttribute('class','quantity');
        quantityDiv.innerText = `${this.quantity} unit(s)`;

        const stockDiv = document.createElement('div');
        stockDiv.setAttribute('class','stock-cost');
        const stockBtn = document.createElement('button');
        stockBtn.innerText = 'Stock Cost';
        stockBtn.addEventListener('click',  e => {
            e.preventDefault();
            alert(`Stock cost : ${this.stockCost()}`);
        })
        stockDiv.append(stockBtn);

        const descDiv = document.createElement('div');
        descDiv.setAttribute('class','view-description');
        const descBtn = document.createElement('button');
        descBtn.innerText = 'Description';
        descBtn.addEventListener('click',  e => {
            e.preventDefault();
            alert(`Description : ${this.viewDesc()}`);
        })
        descDiv.append(descBtn);

        const btnDiv = document.createElement('div');
        btnDiv.setAttribute('class','buy-btn');
        const buyBtn = document.createElement('button');
        buyBtn.innerText = 'Buy';
        buyBtn.addEventListener('click', e =>{
            e.preventDefault();
            alert(`Buing : ${this.name}`);
        });
        if(this.acceptingOrders === 'No'){
            buyBtn.setAttribute('disabled','true'); 
        }
        btnDiv.append(buyBtn);

        productCard.append(nameDiv,costDiv,quantityDiv,stockDiv,descDiv,btnDiv);

        return productCard;
    }

};

export default Product;