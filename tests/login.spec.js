import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("ll+123@yopmail.com", "Ll@123456789");

})