import test, { expect } from "@playwright/test";

test("Get - Fetch api response", async ({ request}) =>{
    const response =  await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
        );

         expect(response.headers()['content-type']).toContain(
        'application/json'
    );

        expect(response.status()).toBe(200);
         const body = await response.json();
         console.log("Response" , body);
         expect(body.id).toBe(1);
    expect(body.userId).toBe(1);
    expect(typeof body.title).toBe('string');
    expect(body.title.length).toBeGreaterThan(0);
    expect(typeof body.body).toBe('string');
    expect(body.body.length).toBeGreaterThan(0);
});


test('GET - Filter posts by user ID', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
            params: {
                userId: 1
            }
        }
    );

    expect(response.status()).toBe(200);

    const posts = await response.json();

    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThan(0);

    for (const post of posts) {
        expect(post.userId).toBe(1);
    }
});


test('GET - Request a nonexistent post', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/999999'
    );

    expect(response.status()).toBe(404);
});



test('POST - Create a new post', async ({ request }) => {

    const requestBody = {
        title: 'Playwright API Testing',
        body: 'Learning POST requests',
        userId: 1
    };

    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data: requestBody
        }
    );

    // Validate status code
    expect(response.status()).toBe(201);

    // Read response body
    const responseBody = await response.json();

    // Validate returned data
    expect(responseBody.title).toBe(requestBody.title);
    expect(responseBody.body).toBe(requestBody.body);
    expect(responseBody.userId).toBe(requestBody.userId);

    // Validate generated ID
    expect(responseBody.id).toBeTruthy();
});


test('PUT - Replace a post', async ({ request }) => {

    const updatedPost = {
        id: 1,
        title: 'Updated Playwright Title',
        body: 'Updated complete post body',
        userId: 1
    };

    const response = await request.put(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            data: updatedPost
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.title).toBe(updatedPost.title);
    expect(body.body).toBe(updatedPost.body);
    expect(body.userId).toBe(updatedPost.userId);
});


test('PATCH - Update only the title', async ({ request }) => {

    const response = await request.patch(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            data: {
                title: 'Partially Updated Title'
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.title).toBe('Partially Updated Title');
});


test('DELETE - Delete a post', async ({ request }) => {

    const response = await request.delete(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect(response.status()).toBe(200);
});

