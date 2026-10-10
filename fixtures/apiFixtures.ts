
import {
    test as base,
    expect,
    request as playwrightRequest,
    APIRequestContext
} from '@playwright/test';

type ApiFixtures = {
    apiRequest: APIRequestContext;
};

export const test = base.extend<ApiFixtures>({

    apiRequest: async ({}, use) => {

        const apiContext = await playwrightRequest.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com',
            extraHTTPHeaders: {
                Accept: 'application/json'
            }
        });

        await use(apiContext);

        await apiContext.dispose();
    }
});

export { expect };
