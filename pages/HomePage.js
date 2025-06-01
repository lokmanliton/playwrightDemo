const { expect } = require("@playwright/test");
const { Console } = require("console");

exports.HomePage = 
class HomePage {

    constructor (page){
        this.page = page;
        // Header links
        this.homeLink = page.getByRole('link', {name: /Home/i});
        this.products = page.getByRole('link', {name: /Products/i});
        this.cart = page.getByRole('link', {name: /Cart/i});
        this.signUp_Login = page.getByRole('link', {name: 'Signup / Login'});
        this.testCases = page.getByRole('link', {name: /Test Cases/i});
        this.apiTesting = page.getByRole('link', {name: /API Testing/i});
        this.videoTutorials = page.getByRole('link', {name: /Video Tutorials/i});
        this.contactUs = page.getByRole('link', {name: /Contact us/i});

        //slider
        this.sliders = page.locator('#slider-carousel');
        this.imageLocator = page.locator('.girl.img-responsive');
        //this. waitForSliders = this.page.waitForTimeout(4000)
        

        // Category Elements
        this.categories = page.locator('h4.panel-title');

        // brand elements
        this.brandLocators = page.locator('//div[@class="brands-name"]/ul/li/a');

    }

    async gotoHomePage(){
        await this.page.goto("https://automationexercise.com/");
    }

    async waitForSliders(time) {
    await this.page.waitForTimeout(time); // ✅ correct place
    }

    async HeaderMenusVisible (){
        await expect(this.homeLink).toBeVisible();
        await expect(this.products).toBeVisible();
        await expect(this.products).toBeVisible();
        await expect(this. cart).toBeVisible();
        await expect(this.signUp_Login).toBeVisible();
        await expect(this.apiTesting).toBeVisible();
        await expect(this.contactUs).toBeVisible();

    }

    async sliderFunctions (){
        await expect(this.sliders).toBeVisible();
        const firstSrc = await this.imageLocator.nth(0).getAttribute('src');
        await this.waitForSliders(4000);
        const secondSrc = await this.imageLocator.nth(1).getAttribute('src');
        // Assert that image src changed
        expect(firstSrc).not.toEqual(secondSrc);

    }

    async verifyCategories(){
        const expectedCategories = ['Women', 'Men', 'Kids'];
        /*const firstCategoryText = await this.categories.nth(0).textContent();
        const secondCategoryText = await this.categories.nth(1).textContent();
        const thirdCategoryText = await this.categories.nth(2).textContent();
        console.log(firstCategoryText, secondCategoryText, thirdCategoryText);*/

        const CategoryTexts = await this.categories.allTextContents();
        //console.log(CategoryTexts);

        for (const expected of expectedCategories){
            const found = CategoryTexts.some(text => text.trim().includes(expected));
            console.log(`Checking for category: ${expected} => Found: ${found}`); // ✅ Debug output
            expect(found, 'Category "${expected}" should be present').toBeTruthy();
        }
    }

    async verifyBrands(){
        const totalBrands = await this.brandLocators.count();
        expect(totalBrands).toBe(8);
    }
        
}