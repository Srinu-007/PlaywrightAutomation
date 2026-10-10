import { defineConfig, devices } from '@playwright/test';

const baseURL =
    process.env.BASE_URL ||
    'https://opensource-demo.orangehrmlive.com';

export default defineConfig({

    // Location of test files
    testDir: './tests',

    // Maximum time for one test
    timeout: 30 * 1000,

    // Retry failed tests only in CI
    retries: process.env.CI ? 2 : 0,

    // Parallel workers in CI
    workers: process.env.CI ? 2 : undefined,

    // HTML report
    reporter: [
        ['html', { open: 'never' }]
    ],

    use: {

        // Application URL
        baseURL: baseURL,

        // Run without opening browser window
        headless: true,

        // Capture trace when retrying
        trace: 'on-first-retry',

        // Screenshot when test fails
        screenshot: 'only-on-failure',

        // Video when test fails
        video: 'retain-on-failure',
    },

 
projects: [
    {
        name: 'setup',
        testMatch: '**/auth/setup.ts',
        use: {
            ...devices['Desktop Chrome'],
            channel: 'chrome',
        },
    },
    {
        name: 'login',
        testMatch: '**/login.spec.ts',
        use: {
            ...devices['Desktop Chrome'],
            channel: 'chrome',
            storageState: {
                cookies: [],
                origins: [],
            },
        },
    },
    {
        name: 'API',
        testMatch: '**/api*.spec.ts',
    },
    {
        name: 'Google Chrome',
        testIgnore: [
            '**/auth/setup.ts',
            '**/login.spec.ts',
            '**/api*.spec.ts'
        ],
        use: {
            ...devices['Desktop Chrome'],
            channel: 'chrome',
            storageState: 'playwright/.auth/user.json',
        },
        dependencies: ['setup'],
    },
],

});