import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SignUpPage } from '../pages/SignUpPage';

test('SignUp', async ({ page }) => {
    const randomEmail = generateRandomEmail();

    const SignUp = new LoginPage(page);
    await SignUp.gotoLoginPage();
    await SignUp.initiateSignUp('Lokman',randomEmail);
    await page.waitForTimeout(3000);

    const SignUp2 = new SignUpPage(page);
    await SignUp2.signUpSubmit("Ll@123456789")
    await SignUp2.verifySignUpSuccessful();
    await SignUp2.deleteAccount();

})

function generateRandomEmail() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const name = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  return `user_${name}_${Date.now()}@testmail.com`;
}