import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SignUpPage } from '../pages/SignUpPage';

test('SignUp', async ({ page }) => {

    const SignUp = new LoginPage(page);
    await SignUp.gotoLoginPage();
    await SignUp.initiateSignUp('Lokman','ll+123@yopmail.com');
    await page.waitForTimeout(3000);

    const SignUp2 = new SignUpPage(page);
    await SignUp2.signUpSubmit("Ll@123456789")
    await SignUp2.verifySignUpSuccessful();
    await SignUp2.deleteAccount();

})