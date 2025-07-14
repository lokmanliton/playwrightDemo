const { expect } = require("@playwright/test");
const { Console } = require("console");

exports.ProductsPage = 
class ProductsPage {

    constructor (page){
        this.page = page;
        // Header links
        this.homeLink = page.getByRole('link', {name: /Home/i});
        this.products = page.getByRole('link', {name: /Products/i});
        this.viewProduct = page.getByRole('link', {name: /View Product/i}).first();
        this.add2Cart = page.getByRole('button', {name: /Add to cart/i});
        this.continueShopping = page.getByRole('button', {name: /Continue Shopping/i});

    }

     async productsDetail(){
        await this.products.click();
        await this.viewProduct.click();

    }

    async addItemsToCart(){
        await this.add2Cart.click();
        await this.continueShopping.click();
    }
        
}