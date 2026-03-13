import { test, expect } from '@playwright/test';

test('@smoke @api API user list should return valid response', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

   expect(responseBody.length).toBeGreaterThan(0);
  expect(responseBody[0]).toHaveProperty('email');
});
test('@smoke @api Invalid endpoint should return 404', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/invalid-url');

  expect(response.status()).toBe(404);
});