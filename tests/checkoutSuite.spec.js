import {test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { cartPage } from '../pages/cartPage';
import { createUserViaAPI,deleteUserViaAPI } from '../pages/userHelper';

test.describe('Checkout Flow Suite', () => {

  let SignUp;
  let SignUp2;
  let products;
  let cart;
  let testUser;

  test.beforeAll(async () => {
    testUser = await createUserViaAPI();
  });
  
  test.afterAll(async () => {
    await deleteUserViaAPI(testUser.email, testUser.password);
  });
 
  test.beforeEach(async ({ page }) => {
    products = new ProductsPage(page);
    cart = new cartPage(page);
  });

  test('End-to-End Checkout Flow', async ({ page }) => {
    
    await test.step('Login to Application', async () => {
    const login = new LoginPage(page);
      await login.gotoLoginPage();
      await login.login(testUser.email, testUser.password);
    
    });

    await test.step('View Product Detail', async () => {
      await products.productsDetail();
    });

    await test.step('Add Items to Cart', async () => {
      await products.addItemsToCart();
    });

    await test.step('Proceed to Checkout', async () => {
      await cart.CartDetail();
      await cart.proceedCheckout();
      await cart.paymentSubmit();
      await cart.orderConfirmation();
    });

  });
});

