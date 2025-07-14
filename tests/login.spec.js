import {test, expect} from '@playwright/test';
import { createUserViaAPI,deleteUserViaAPI } from '../pages/userHelper';
import { LoginPage } from '../pages/LoginPage';

/*test('Login', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("ll+123@yopmail.com", "Ll@123456789");

})*/

let testUser;

test.describe('User Flow', () => {
  test.beforeAll(async () => {
    testUser = await createUserViaAPI();
  });

  test.afterAll(async () => {
    await deleteUserViaAPI(testUser.email, testUser.password);
  });

  test('Login using user created via API', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login(testUser.email, testUser.password);
  });
});
