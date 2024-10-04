export default function(){
    const productCard = document.createElement('div');
    productCard.setAttribute('class','product');

    const nameDiv = document.createElement('div');
    nameDiv.setAttribute('class','name');
    nameDiv.innerText = this.getName;

    const costDiv = document.createElement('div');
    costDiv.setAttribute('class','cost');
    costDiv.innerText = `$${this.getCost}`;

    const quantityDiv = document.createElement('div');
    quantityDiv.setAttribute('class','quantity');
    quantityDiv.innerText = `${this.getQuantity} unit(s)`;

    const discDiv = document.createElement('div');
    discDiv.setAttribute('class','discount');
    const inputBox = document.createElement('input');
    inputBox.setAttribute('type','number');
    inputBox.setAttribute('name','discount');
    inputBox.setAttribute('min','0');
    inputBox.setAttribute('max','100');
    inputBox.setAttribute('value','0');
    inputBox.addEventListener('keyup', e =>{
        e.preventDefault();
        this.setDiscount = e.target.value;
    });
    
    discDiv.append(inputBox);

    const stockDiv = document.createElement('div');
    stockDiv.setAttribute('class','stock-cost');
    const stockBtn = document.createElement('button');
    stockBtn.innerText = 'Stock Cost';
    stockBtn.addEventListener('click',  e => {
        e.preventDefault();
        alert(`Stock cost : $${this.stockCost}`);
    })
    stockDiv.append(stockBtn);

    const descDiv = document.createElement('div');
    descDiv.setAttribute('class','view-description');
    const descBtn = document.createElement('button');
    descBtn.innerText = 'Description';
    descBtn.addEventListener('click',  e => {
        e.preventDefault();
        alert(`Description : ${this.getDesc}`);
    })
    descDiv.append(descBtn);

    const btnDiv = document.createElement('div');
    btnDiv.setAttribute('class','buy-btn');
    const buyBtn = document.createElement('button');
    buyBtn.innerText = 'Buy';
    buyBtn.addEventListener('click', e =>{
        e.preventDefault();
        alert(`Buing : ${this.getName}`);
    });
    if(this.getAccept === 'No'){
        buyBtn.setAttribute('disabled','true'); 
    }
    btnDiv.append(buyBtn);

    productCard.append(nameDiv,costDiv,quantityDiv,discDiv,stockDiv,descDiv,btnDiv);

    return productCard;
}