import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Header menus', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.gotoHomePage();
    await expect(page).toHaveTitle('Automation Exercise')
    await homepage.HeaderMenusVisible();

} )

test('Slider', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.gotoHomePage();
    await homepage.sliderFunctions();
    
} )

test('Category and Brands', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.gotoHomePage();
    await homepage.verifyCategories();
    await homepage.verifyBrands();

    
} )
