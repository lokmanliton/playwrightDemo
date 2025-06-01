const { expect } = require('@playwright/test');

exports.SignUpPage = 
class SignUpPage {

    constructor(page){
        this.page = page;
        this.selectTitle = page.locator('input[type="radio"]').first();
        this.inputPassword = page.locator('input[name="password"]'); 
        this.inputFirstName = page.locator('input[name="first_name"]');
        this.inputLastName = page.locator('input[name="last_name"]');
        this.inputAddress = page.locator('input[id="address1"]');
        this.selectCountry = page.locator('#country');
        this.selectDay = page.locator('#days');
        this.selectMonth = page.locator('#months');
        this.selectYear = page.locator('#years');
        this.inputState = page.locator('#state');
        this.inputCity = page.locator('#city'); // id
        this.inputZip = page.locator('#zipcode');
        this.inputMobile= page.locator('#mobile_number');
        this.createAccount = page.locator('button[data-qa="create-account"]');

        this.accountCreated = page.locator('[data-qa="account-created"]');
        //this.messageP = page.locator('p');
        this.continueBtn = page.locator('[data-qa="continue-button"]');

        this.deleteBtn = page.getByRole('link', { name: 'Delete Account' });


    }

    async gotoLoginPage(){
        await this.page.goto("https://automationexercise.com/login")
    }

    async signUpSubmit(password){
        await this.selectTitle.click();
        await this.inputPassword.fill(password);
        await this.selectDay.selectOption("25");
        await this.selectMonth.selectOption("June");
        await this.selectYear.selectOption("1988");
        await this.inputFirstName.fill("Lokman");
        await this.inputLastName.fill("Hekim");
        await this.inputAddress.fill("LL QA Avenue");
        await this.selectCountry.selectOption('United States');
        await this.inputState.fill("FL")
        await this.inputCity.fill("Boca Raton");
        await this.inputZip.fill("63525");
        await this.inputMobile.fill("+19183526195")
        await this.createAccount.click();
    }

    async verifySignUpSuccessful(){
        await expect(this.accountCreated).toHaveText(/Account Created!/);
        await expect(this.continueBtn).toBeVisible();
        await expect(this.continueBtn).toHaveText('Continue');

    }

    async deleteAccount(){
        await this.continueBtn.click()
        await this.deleteBtn.click();

    }

}