const { expect } = require("@playwright/test");
const { Console } = require("console");

exports.cartPage = 
class cartPage {

    constructor (page){
        this.page = page;
        // Header links
        this.viewCart = page.getByRole('link', {name: /Cart/i});
        this.ckout = page.locator('a[class="btn btn-default check_out"]');
        this.message = page.locator('textarea[name="message"]');
        this.placeOrder = page.locator('a[class="btn btn-default check_out"]');
        this.nameOnCard = page.locator('input[name="name_on_card"]');
        this.cardNumber = page.locator('input[name="card_number"]');
        this.cvc = page.locator('input[name="cvc"]');
        this.month = page.locator('input[name="expiry_month"]');
        this.year = page.locator('input[name="expiry_year"]');
        this.placepayment = page.getByRole('button', {name: /Pay and Confirm Order/i});
        this.orderPlaced = page.locator('h2.title.text-center');

        this.confirmationMessage = page.locator('p', {hasText: 'Congratulations! Your order has been confirmed!'});

        this.downloadInvvoice = page.getByRole('link', {name: /Download Invoice/i});


    }

     async CartDetail(){
        await this.viewCart.click();

    }
    async proceedCheckout(){
        await this.ckout.click();
        await this.message.fill("This is a test order, please ignore");

    }

      async paymentSubmit(){
        await this.placeOrder.click();
        await this.nameOnCard.fill("Lokman Hekim");
        await this.cardNumber.fill("4242424242424242");
        await this.cvc.fill("123");
        await this.month.fill("11");
        await this.year.fill("2029");
        await this.placepayment.click();
    }

    async orderConfirmation(){
        await expect(this.orderPlaced).toHaveText(/ORDER PLACED!/i);
        await expect(this.confirmationMessage).toHaveText(/Congratulations! Your order has been confirmed!/i);
        await expect(this.downloadInvvoice).toBeVisible();

    }
       
        
}