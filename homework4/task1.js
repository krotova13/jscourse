'use strict'
//es5

function Product (name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function() {
    this.price = this.price - (this.price * 25 / 100);
}

const product1 = new Product ('Продукт 1', 300)
product1.make25PercentDiscount();

console.log(product1);


//es6
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount(){
        this.price = this.price - (this.price * 25 / 100);
    }
}

const product1 = new Product ('Продукт 1', 300)
product1.make25PercentDiscount();

console.log(product1);