
import { test, expect } from '../fixtures/apiFixtures';

test('GET - Use reusable API fixture', async ({ apiRequest }) => {

    const response = await apiRequest.get('/posts/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.userId).toBe(1);
    expect(body.title).toBeTruthy();
});

////////////////********api + ui

// import { test, expect } from '@playwright/test';

// test('Create record by API and verify in UI', async ({
//     request,
//     page
// }) => {

//     // Step 1: Create a record through the API
//     const response = await request.post(
//         'https://your-application.example.com/api/records',
//         {
//             data: {
//                 name: 'Automation Test Record'
//             }
//         }
//     );

//     expect(response.status()).toBe(201);

//     // Step 2: Capture the created record ID
//     const createdRecord = await response.json();
//     const recordId = createdRecord.id;

//     expect(recordId).toBeTruthy();

//     // Step 3: Open the same application in the browser
//     await page.goto('https://your-application.example.com');

//     // Step 4: Navigate to the appropriate page
//     // Replace this with your application's real navigation.
//     await page.getByRole('link', { name: 'Records' }).click();

//     // Step 5: Verify the record in the UI
//     await expect(
//         page.getByText(String(recordId), { exact: true })
//     ).toBeVisible();
// });

// const response = await request.post('/records', {
//     data: { name: 'Automation Test Record' }
// });

// expect(response.status()).toBe(201);

// const record = await response.json();

// try {
//     // Perform your UI validation here.
// } finally {
//     // Delete the test record if the API supports deletion.
//     await request.delete(`/records/${record.id}`);
// }