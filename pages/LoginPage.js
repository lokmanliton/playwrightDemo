const { expect } = require("@playwright/test");

exports.LoginPage = 
class LoginPage {

    constructor(page){
        this.page = page;
        this.inputLoginEmail = page.locator('input[name="email"]').first();
        this.inputSignUpEmail = page.locator('input[data-qa="signup-email"]');
        this.inputPassword = page.locator('input[name="password"]'); 
        this.inputName = page.locator('input[name="name"]');
        this.loginButton= page.locator('button[type="submit"]').first();
        this.signUpButton = page.locator('button[data-qa="signup-button"]')
        this.logoutBtn = page.getByRole('link', {name: /Logout/i});

    }

    async gotoLoginPage(){
        await this.page.goto("https://automationexercise.com/login")
    }

    async login(email, password){
        await this.inputLoginEmail.fill(email);
        await this.inputPassword.fill(password);
        await this.loginButton.click();
        await expect(this.logoutBtn).toBeVisible();

    }

    async initiateSignUp(name,sUemail){
        await this.inputName.fill(name);
        await this.inputSignUpEmail.fill(sUemail);
        await this.signUpButton.click();
    }

}