import { request, expect } from '@playwright/test';

let email;
let password;

export async function createUserViaAPI() {
  const apiContext = await request.newContext();
  const email = `lokman${Date.now()}@yopmail.com`;

  const formData = {
    name: 'Lokman Hekim',
    email: email,
    password: 'Ll@123456789',
    title: 'Mr.',
    birth_date: '15',
    birth_month: 'July',
    birth_year: '1988',
    firstname: 'Lokman',
    lastname: 'Hekim',
    company: 'QA Verse Ltd',
    address1: 'test',
    country: 'United States',
    zipcode: '10012',
    state: 'New York',
    city: 'New York',
    mobile_number: '+12012123698'
  };

  const response = await apiContext.post('https://automationexercise.com/api/createAccount', {
    form: formData
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.message).toBe('User created!');

  console.log(' User created:', email);

  return {
    email,
    password: formData.password,
    name: formData.firstname
  };
};

export async function deleteUserViaAPI(email, password) {
  const apiContext = await request.newContext();


  const formData = {
    email: email,
    password: password
  };

  const response = await apiContext.delete('https://automationexercise.com/api/deleteAccount', {
    form: formData
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.message).toBe('Account deleted!');

  console.log('Account deleted!', email);
}
